import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import supabaseService from "../services/supabaseClient";

export default function Unsubscribe() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const token = searchParams.get('token');
      if (token) {
        await supabaseService.unsubscribeToNewsletter(token);
      }
    })();
  }, [searchParams]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white text-center">
      <p class="text-xl font-bold">Unsubscribed.</p>
      <p>All your data is deleted from the server.</p>
    </div>
  );
}
