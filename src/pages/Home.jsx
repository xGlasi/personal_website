import LatestBlogs from "./LatestBlogs";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import CSharpCodeTypewriter from "./CSharpCodeTypeWriter";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL);
console.log('Supabase Anon Key:', process.env.REACT_APP_SUPABASE_ANON_KEY);

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
  
      const fetchPosts = async () => {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('published_at', { ascending: false }); 
  
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
                        <a href="https://www.linkedin.com/in/andreas-glashauser-008551252/" alt="LinkedIn Logo">
                          <img height={30} width={30} src="resources/logo_linkedIn.png"/>
                        </a>
                      </li>
                      <li className="p-1">
                          <a href="https://www.xing.com/profile/Andreas_Glashauser/" alt="Xing Logo">
                              <img height={30} width={30} src="resources/logo_xing.svg"/>
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