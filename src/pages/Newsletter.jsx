import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function Newsletter() {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  const [emailAddress, setEmail] = useState('');

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
  };

  return (
    <div class="h-screen flex flex-col items-center justify-center rounded-md border border-customLightGray">
      <div class="text-center">
        <p className="text-white font-bold text-5xl mb-1">
          Transform Your Tomorrow
        </p>
        <p class="text-white text-xl mb-4">
        Subscribe to the newsletter to stay up to date with the newest trends!
        </p>
      </div>      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={emailAddress}
          onChange={(e) => setEmail(e.target.value)}
          required
          class="p-3 rounded-md pl-20"
        />
        <button t
        ype="submit"
        class="bg-customBlue text-white p-3 rounded-md ml-5"
        >Subscribe</button>
      </form>
    </div>
  );
};