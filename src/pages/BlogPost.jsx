import React from 'react';
import { useParams } from 'react-router-dom';
import { usePostByUrl } from '../hooks/usePostByUrl';

const BlogPost = () => {
  const { url } = useParams();
  const { post, loading, error } = usePostByUrl(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <div className="p-5" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
