import { createClient } from '@supabase/supabase-js';

class SupabaseService {
  constructor(url, key) {
    this.client = createClient(url, key);
  }

  async fetchPosts() {
    const { data, error } = await this.client
      .from('posts')
      .select('*')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Fehler beim Abrufen der Posts:', error);
      return { error };
    }
    return { data };
  }

  async fetchPostByUrl(url) {
    const { data, error } = await this.client
      .from('posts')
      .select('*')
      .match({url: url})
      .single();

      if (error) {
        console.error('Fehler beim Abrufen der Posts:', error);
        return { error };
      }
      return { data };
  }

  async subscribeToNewsletter(emailAddress) {
    const { error } = await this.client
      .from('newsletter_subscribers')
      .insert([{ email: emailAddress }]);

    if (error) {
      console.error('Fehler beim Speichern in Supabase:', error);
      return { error };
    }
    return { success: true };
  }

  async unsubscribeToNewsletter(uuid) {
    const { error } = await this.client
    .from("newsletter_subscribers")
    .delete()
    .match({ uuid: uuid});

    if (error) {
      console.error('Fehler beim Speichern in Supabase:', error);
      return { error };
    }
    return { success: true };
  }

  async confirmSubscriptionToNewsletter(uuid) {
    console.log(uuid)
    const { error } = await this.client
    .from("newsletter_subscribers")
    .update({ confirmed_subscription: true })
    .match({ uuid }); 
    console.log("Jetzt hier")

    if (error) {
      console.error('Fehler beim Aktualisieren der Bestätigung:', error);
      return { error };
    }
  }

  async sendWelcomeEmail(uuid) {
    const { error } = await this.client
    .functions
    .invoke('Send Welcome Email', {
      body: { uuid: uuid}
    })

    if (error) {
      console.error('Fehler beim Aktualisieren der Bestätigung:', error);
      return { error };
    }
  }
}

const supabaseService = new SupabaseService(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

export default supabaseService;
