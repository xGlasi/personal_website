import React from 'react';
import BlogCard from './BlogCard';
import { usePosts } from '../hooks/usePosts';

export default function LatestBlogs() {
  const { posts } = usePosts()

    return (
        <div className="z-10 relative border border-customLightGray p-5 pb-0 rounded-lg">
            <p className="text-white text-3xl font-bold pl-5">
                My latest blog posts:
            </p>
            <div className="grid z-10  xl:w-1/2  relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 pb-0">
                {posts.slice(0, 3).map((post) => (
                    <div key={post.id}>
                        <BlogCard
                            url={post.url}
                            title={post.title}
                            excerpt={post.excerpt}
                            imageUrl={post.cover_image_url}
                            date={post.published_at}
                            tags={post.tags}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
