import LatestBlogs from "../components/LatestBlogs";
import React from 'react';
import CSharpCodeTypewriter from "../components/CSharpCodeTypeWriter";
import SocialMedia from "../components/SocialMedia";
import { usePosts } from '../hooks/usePosts';

export default function Home() {
  const [ posts ] = usePosts()

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