import { useState, useEffect } from 'react';
import supabaseService from '../services/supabaseClient';

export const usePostByUrl = (url) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabaseService.fetchPostByUrl(url);
        if (error) throw error;
        setPost(data);
      } catch (error) {
        console.error('Fehler beim Abrufen des Posts:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) fetchPost();
  }, [url]);

  return { post, loading, error };
};
