import BlogCard from '../components/BlogCard'; 
import { usePosts } from '../hooks/usePosts';

export default function Blog() {
  const { posts } = usePosts();

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
