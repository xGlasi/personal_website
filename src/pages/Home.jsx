import LatestBlogs from "./LatestBlogs";
import React, { useState, useEffect } from 'react';
import CSharpCodeTypewriter from "./CSharpCodeTypeWriter";
import supabaseService from '../services/supabaseClient';
import SocialMedia from "./SocialMedia";

export default function Home() {
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
      <>
        <div className="relative
         text-white p-3 md:p-20 md:h-[520px] flex flex-grow items-stretch justify-between rounded-lg z-10">            
          <div className="p-5 border border-customLightGray rounded-lg z-20 w-full overflow-hidden">
              <CSharpCodeTypewriter/>
          </div>

          <div className="z-20 hidden md:block">
              <img src="resources/memoji_hello.png" alt="Memoji"/>
          </div>
          <div className="hidden md:block h-[520px]">
            <SocialMedia/>
          </div>
        </div>

        <div className="z-30 relative p-3 md:p-20">
            <LatestBlogs posts={posts}/>
        </div>
      </>
    )

}