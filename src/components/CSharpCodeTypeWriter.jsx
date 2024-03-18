import Typewriter from 'typewriter-effect';
import React from 'react';

const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

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
            }`;

  const part2Mobile = `
          <span class="text-orange-400 font-medium">a developer and now studying</span><br>
          <span class="text-orange-400 font-medium ml-12">artificial intelligence. Feel free to check </span><br>
          <span class="text-orange-400 font-medium ml-12">out my latest work on GitHub or catch up </span><br>
          <span class="text-orange-400 font-medium ml-12">with my thoughts and discoveries on my</span><br>
          <span class="text-orange-400 font-medium ml-12">blog.</span><br>
          <span class="text-orange-400 font-medium ml-12">"""</span>);<p class="ml-4">}</p>
            }`;

  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
        .changeDelay(2)
        .changeDeleteSpeed(2)
        .typeString(part1)
        .pauseFor(1000)
        .deleteChars(deleteLength) 
        .typeString(isMobile.any() ? part2Mobile : part2)
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
