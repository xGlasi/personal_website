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
  const subscribeLink = `https://andreasglashauser.netlify.app/subscribe?token=${payload.record?.uuid}`;

  console.log("JETZT GEHTS LOOOS");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
    },
    body: JSON.stringify({
      from: 'Andreas Glashauser <onboarding@resend.dev>',      
      to: payload.record?.email,
      subject: "Newsletter subscription",
      html: `
      Hey, <br/>
      Welcome to my newsletter! <br/><br/>
      Please confirm your newsletter subscription by clicking <a href="${subscribeLink}">here</a>.<br/><br/>
      See you!<br/><br/>
      Andreas Glashauser
      `,
    }),
  });

  const data = await res.json();
  console.log({ data });

  return new Response("ok");
});
