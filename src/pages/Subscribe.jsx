import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import supabaseService from "../services/supabaseClient";

export default function Subscribe() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      const token = searchParams.get('token');
      if (token) {
        await supabaseService.confirmSubscriptionToNewsletter(token);
      }
    })();
  }, [searchParams]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white text-center">
      <p class="text-xl font-bold">Welcome!.</p>
    </div>
  );
}
