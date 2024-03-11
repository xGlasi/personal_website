import LatestBlogs from "./LatestBlogs";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import BinaryBackground from "../BinaryBackground";

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
              <div className="bg-slate-900 p-5 rounded-lg z-20">
                  <p className="text-6xl font-bold">
                      Hi, I'm Andreas Glashauser 
                  </p>
                  <p className="pt-10 text-2xl">
                      I am a developer and now studying artificial intelligence.<br></br>
                      Feel free to check out my latest work on GitHub or catch up with <br/>
                      my thoughts and discoveries on my blog. 
                  </p>
              </div>

              <div className="z-20">
                  <img src="resources/memoji_hello.png" alt="Memoji"/>
              </div>
              <div className="bg-slate-900 p-10 rounded-lg">
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
                          <img height={30} width={30} src="resources/logo_linkedIn.png"/>
                        </a>
                      </li>
                      <li className="p-1">
                          <a href="https://www.xing.com/profile/Andreas_Glashauser/">
                              <img height={30} width={30} src="resources/logo_xing.svg"/>
                          </a>
                      </li>
                      <li className="p-1">
                          <a href="https://twitter.com/andigls">
                              <img height={30} width={30} src="resources/logo_x.png"/>
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