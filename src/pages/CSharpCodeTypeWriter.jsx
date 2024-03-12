import Typewriter from 'typewriter-effect';
import React from 'react';

const CSharpCodeTypewriter = () => {
  const part1 = `
    <span class="text-blue-600 font-semibold">using</span> System;<br><br>
    <span class="text-blue-600 font-semibold">public class</span> <span class="text-green-400 font-semibold">Program</span> <br>{
    <br><span class="text-blue-600 ml-4 font-semibold">public static void</span> 
    <span class="text-green-400 font-semibold">Main</span>(<span class="text-green-400 font-semibold">String</span>[] args)<br><p class="ml-4">{</p>
    <span class="text-green-400 font-semibold ml-8">Console</span>.<span class="text-green-400 font-semibold">WriteLine</span>(<span class="text-orange-400">"""</span><br>
    <span class="text-orange-400 ml-12 font-medium">Hi, I'm Andreas Glashauser`;
  
  const deleteLength = "Andreas Glashauser".length;

  const part2 = `
            <span class="text-orange-400 font-medium">a developer and now studying artificial intelligence. Feel</span><br>
         	<span class="text-orange-400 font-medium ml-12">free to check out my latest work on GitHub or catch </span><br>
         	<span class="text-orange-400 font-medium ml-12">up with my thoughts and discoveries on my blog.</span><br>
         	<span class="text-orange-400 font-medium ml-12">"""</span>);<p class="ml-4">}</p>
            }
            `;

  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
        .changeDelay(2)
        .changeDeleteSpeed(2)
        .typeString(part1)
        .pauseFor(1000)
        .deleteChars(deleteLength) 
        .typeString(part2)
        .start();
      }}
      options={{
        wrapperClassName: 'typewriter-code',
        cursorClassName: 'typewriter-cursor'
      }}
    />
  );
};

export default CSharpCodeTypewriter;
