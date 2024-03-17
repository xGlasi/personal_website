import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

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
}

const supabaseService = new SupabaseService(supabaseUrl, supabaseAnonKey);

export default supabaseService;
