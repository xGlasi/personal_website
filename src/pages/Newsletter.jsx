import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function Newsletter() {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const [emailAddress, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: emailAddress }); 

    if (error) {
      alert('Es gab ein Problem beim Speichern Ihrer E-Mail. Bitte versuchen Sie es später erneut.');
      console.error('Fehler beim Speichern in Supabase:', error);
      return;
    }

    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-white font-bold text-3xl">
          Confirmation mail sent to {emailAddress}
        </p>
        <p className="text-white font-bold text-3xl">
          Check your inbox!
        </p>
      </div>
    );
  } else {
      return (
        <div class="h-screen flex flex-col items-center content-center text-center justify-center rounded-md border border-customLightGray">
          <div class="text-center">
            <p className="text-white font-bold text-5xl mb-1">
              Transform Your Tomorrow
            </p>
            <p class="text-white text-xl mb-4">
            Subscribe to the newsletter to be notified when a new blog post is published
            </p>
          </div>  
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={emailAddress}
              onChange={(e) => setEmail(e.target.value)}
              required
              class="p-3 rounded-md w-96 text-center"
            />
            <button t
            ype="submit"
            class="bg-customBlue text-white p-3 m-1 rounded-md ml-5"
            >Subscribe</button>
          </form>
          <p class="text-gray-400 text-sm p-5">
          I will only send you notifications for new blog posts, no advertising or anything else. Pinky promise!
          </p>
        </div>
      );
  }
}