import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Database } from "./types.ts";

type NewsletterRecord = Database["public"]["Tables"]["newsletter_subscribers"]["Row"]
interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  record: null | NewsletterRecord;
  schema: "public";
  old_record: null | NewsletterRecord;
}

serve(async (req) => {
  const payload: WebhookPayload = await req.json();
  console.log("Lade Paylod...")
  console.log("Neuer User:")
  console.log(payload.record)

  console.log("JETZT GEHTS LOOOS");
  console.log(Deno.env.get("RESEND_API_KEY"));
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
    },
    body: JSON.stringify({
      from: 'Acme <onboarding@resend.dev>',      
      to: payload.record?.email,
      subject: "Welcome to the Club",
      html: `Hey Andreas Glashauser we're glad to have you!`,
    }),
  });

  const data = await res.json();
  console.log({ data });

  return new Response("ok");
});