import { Resend } from 'resend';

const resend = new Resend('re_123456789');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Andreas Glashauser <onboarding@resend.dev>',
    to: ['a.andreasglashauser@gmail.com'],
    subject: 'Welcome!',
    html: 'You are now subscribed to the newsletter :-)',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
