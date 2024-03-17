import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
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
      to: ['a.andreasglashauser@gmail.com'],
      subject: "Welcome to the Club",
      html: `Hey Andreas Glashauser we're glad to have you!`,
    }),
  });

  const data = await res.json();
  console.log({ data });

  return new Response("ok");
});