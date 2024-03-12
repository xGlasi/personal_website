import LatestBlogs from "./LatestBlogs";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import BinaryBackground from "../BinaryBackground";
import { TypeAnimation } from "react-type-animation";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light-async";

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
              <div className="bg-slate-900 p-5 rounded-lg z-20 w-[500px]">
                  <p className="tex-6xl font-bold">
                    <TypeAnimation
                        style={{ whiteSpace: 'pre', display: 'block' }}                    sequence={[
                        'using System;\n\n public class Program \n{\n\t public static void Main(String[] args)\n\t{\n\t\tConsole.WriteLine("Hello World!");\n\t}\n}',
                      ]}
                      wrapper="span"
                      speed={50}
                    />
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