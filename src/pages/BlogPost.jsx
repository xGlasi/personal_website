import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import supabaseService from '../services/supabaseClient';

const BlogPost = () => {
  const { url } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabaseService.fetchPostByUrl(url);

      if (error) {
        console.log('Fehler beim Abrufen des Posts:', error);
      } else {
        setPost(data);
      }
    };

    fetchPost();
  }, [url]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <div class="p-5" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
