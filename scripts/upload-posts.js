const fs = require('fs');
const path = require('path');
const asciidoctor = require('asciidoctor')();
const { createClient } = require('@supabase/supabase-js');

// Ersetze 'deine_supabase_url' und 'dein_angehefteter_api_key' durch deine Supabase Projektangaben
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const BLOG_DIR = './public/blog';

// Eine Funktion, um Metadaten aus dem ASCIIdoc-Inhalt zu extrahieren
function extractMetadata(content) {
  const metadata = {};
  const lines = content.split('\n');
  lines.forEach(line => {
    if (line.startsWith(':')) {
      const [key, value] = line.replace(':', '').split(': ');
      metadata[key.trim()] = value.trim();
    }
  });
  return metadata;
}

// Eine Funktion, um Blog-Posts zu Supabase zu pushen
async function pushToSupabase(metadata, htmlContent) {
  const { data, error } = await supabase
    .from('posts')
    .insert([
      {
        title: metadata.title,
        excerpt: metadata.excerpt,
        content: htmlContent,
        published_at: metadata.published_at,
        tags: metadata.tags.split(','),
        cover_image_url: metadata.cover_image_url,
        slug: metadata.slug,
      },
    ]);
    
  if (error) {
    console.error('Fehler beim Hochladen:', error);
    return false;
  } else {
    console.log('Erfolgreich hochgeladen:', data);
    return true;
  }
}

// Hauptfunktion zum Verarbeiten der ASCIIdoc-Dateien und Hochladen der Posts
async function processAndUploadPosts() {
  const files = fs.readdirSync(BLOG_DIR);

  for (let file of files) {
    if (path.extname(file) === '.adoc') {
      const filePath = path.join(BLOG_DIR, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const htmlContent = asciidoctor.convert(content);
      const metadata = extractMetadata(content);
      
      const success = await pushToSupabase(metadata, htmlContent);
      if (!success) {
        console.error(`Das Hochladen des Posts '${metadata.title}' ist fehlgeschlagen.`);
      }
    }
  }
}

// Ausführen der Hauptfunktion
processAndUploadPosts().then(() => {
  console.log('Alle Posts wurden verarbeitet.');
});
