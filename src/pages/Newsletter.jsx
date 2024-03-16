import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function Newsletter() {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  const [emailAddress, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Speichern der E-Mail in Supabase
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: emailAddress }); // Die E-Mail-Adresse wird in der Tabelle gespeichert

    if (error) {
      alert('Es gab ein Problem beim Speichern Ihrer E-Mail. Bitte versuchen Sie es später erneut.');
      console.error('Fehler beim Speichern in Supabase:', error);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Ihre E-Mail Adresse"
        value={emailAddress}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Anmelden</button>
    </form>
  );
};