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
  console.log("Payload:")
  console.log(payload.record)
  const unsubscribeLink = `https://andreasglashauser.netlify.app/unsubscribe?token=${payload.record?.uuid}`;

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
      Hey, <br/><br/>
      You have now been successfully subscribed to the newsletter. You can cancel your subscription by clicking <a href="${unsubscribeLink}">here</a>.<br/><br/>
      Have fun reading!<br/>
      Andreas Glashauser
      `,
    }),
  });

  return new Response("ok");- - 
});
