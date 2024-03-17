export default async (req, res) => {
  const { createClient } = require("@supabase/supabase-js");
  
  const supabase = createClient(Deno.env.get("SUPABASE_URL"), Deno.env.get("SUPABASE_ANON_KEY"));
  
  const { uuid } = req.body;
  
  if (!uuid) {
    return res.status(400).json({ error: "UUID is required." });
  }

  const { data, error } = await supabase
    .from("newsletter_subscribers")
    .delete()
    .match({ id: uuid });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // Rückgabe einer Erfolgsmeldung
  return res.status(200).json({ message: "Unsubscribe successful", data: data });
};
