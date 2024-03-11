import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

export default function LatestBlogs({ posts }) {
    const [displayedPosts, setDisplayedPosts] = useState(posts);

    useEffect(() => {
        const updateDisplayedPosts = () => {
            const width = window.innerWidth;
            let maxPosts;
            if (width >= 1024) { // lg: Anzeige von max. 8 Posts
                maxPosts = 3;
            } else if (width >= 768) { // md: Anzeige von max. 4 Posts
                maxPosts = 2;
            } else { // sm: Anzeige von max. 2 Posts
                maxPosts = 1;
            }
            setDisplayedPosts(posts.slice(0, maxPosts));
        };

        window.addEventListener('resize', updateDisplayedPosts);
        updateDisplayedPosts(); // Initialer Aufruf für die erste Anzeige

        return () => window.removeEventListener('resize', updateDisplayedPosts);
    }, [posts]);

    return (
        <>
            <div className="z-10 relative  bg-slate-900 p-5 mx-20 rounded-lg">
                <div>
                    <p className="text-white text-3xl font-bold pl-5">
                        My latest blog posts:
                    </p>
                </div>
                <div className="grid z-10 relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                    {displayedPosts.map((post) => (
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
        </>
    );
}
