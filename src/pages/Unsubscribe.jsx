import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // Import hinzufügen
import supabaseService from "../services/supabaseClient";

export default function Unsubscribe() {
  const [searchParams] = useSearchParams(); // Korrekte Initialisierung von useSearchParams
  
  useEffect(() => {
    // Die Verwendung von async direkt in useEffect ist nicht erlaubt.
    // Stattdessen eine sofort ausgeführte asynchrone Funktion verwenden.
    (async () => {
      const token = searchParams.get('token');
      if (token) {
        await supabaseService.unsubscribeToNewsletter(token);
      }
    })();
  }, [searchParams]);

  return (
    <>
      <p>Unsubscribed.</p>
    </>
  );
}
