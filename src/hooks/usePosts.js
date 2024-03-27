// hooks/usePosts.js
import { useState, useEffect } from 'react';
import supabaseService from '../services/supabaseClient';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabaseService.fetchPosts();
        if (error) throw error;
        setPosts(data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Posts:', error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
