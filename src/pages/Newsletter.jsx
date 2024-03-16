import React, { useState } from 'react';

export default function Newsletter() {
  console.log("Jetzt bisd do jawoi")
  const [email, setEmail] = useState('');

  // Eine neue Funktion, um das Formular zu verarbeiten
  const handleSubmit = async (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite
    const success = await sendWelcomeEmail(email); // Ruft die E-Mail-Versandfunktion auf
    if (success) {
      alert('Vielen Dank für die Anmeldung!');
      setEmail(''); // Setzt das E-Mail-Feld zurück
    } else {
      alert('Es gab ein Problem mit Ihrer Anmeldung. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <div>
      asdfsdf
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ihre E-Mail Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Anmelden</button>
      </form>
    </div>

  );
};