import LatestBlogs from "./LatestBlogs";
import React, { useState, useEffect } from 'react';
import CSharpCodeTypewriter from "./CSharpCodeTypeWriter";
import supabaseService from '../services/supabaseClient';

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
          <div className="relative text-white p-20 flex flex-grow justify-between rounded-lg z-10">
              <div className="p-5 border border-customLightGray rounded-lg z-20 w-[2000px]">
                  <CSharpCodeTypewriter/>
              </div>

              <div className="z-20">
                  <img src="resources/memoji_hello.png" alt="Memoji"/>
              </div>
              <div className="border border-customLightGray p-10 rounded-lg">
                  <p className="font-semibold">
                      My Socials:
                  </p>
                  <ol className="p-3">
                      <li className="p-1">
                          <a href="https://github.com/xGlasi">
                            <img height={30} width={30} src="resources/logo_github.png" alt="GitHub Logo"/>
                          </a>
                      </li>
                      <li className="p-1">
                        <a href="https://www.linkedin.com/in/andreas-glashauser-008551252/">
                          <img height={30} width={30} src="resources/logo_linkedIn.png" alt="LinkedIn Logo"/>
                        </a>
                      </li>
                      <li className="p-1">
                          <a href="https://www.xing.com/profile/Andreas_Glashauser/">
                              <img height={30} width={30} src="resources/logo_xing.svg" alt="Xing Logo"/>
                          </a>
                      </li>
                      <li className="p-1">
                          <a href="https://twitter.com/andigls">
                              <img height={30} width={30} src="resources/logo_x.png" alt="X Logo"/>
                          </a>
                      </li>
                  </ol>
              </div>

          </div>

          <div className="z-30 relative">
              <LatestBlogs posts={posts}/>
          </div>
        </>
    )
}