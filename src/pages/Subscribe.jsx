import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import supabaseService from "../services/supabaseClient";
import Home from "./Home";
import Alert from "./Alert";

export default function Subscribe() {
  const [searchParams] = useSearchParams();
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    (async () => {
      const token = searchParams.get('token');
      if (token) {
        await supabaseService.confirmSubscriptionToNewsletter(token);
      }
    })();
  }, [searchParams]);


  return (
    <>
    {showAlert && (
        <Alert
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto, ipsam similique veniam."
          onDismiss={() => setShowAlert(false)}
        />
      )}
        <Home/>
    </>
  );
}
