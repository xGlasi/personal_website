import React, { useState, useEffect } from 'react';
import supabaseService from '../services/supabaseClient';
import BlogCard from '../components/BlogCard'; 

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabaseService.fetchPosts();

      if (error) {
        console.log('Fehler beim Abrufen der Posts:', error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="mx-auto p-4 md:p-20" style={{ maxWidth: '75%' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            imageUrl={post.cover_image_url}
            date={post.published_at}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  );
  
}
