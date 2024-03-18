// SocialLinks.js
import React from 'react';

const socials = [
  { name: 'GitHub', url: 'https://github.com/xGlasi', imgSrc: 'resources/logo_github.png', alt: 'GitHub Logo' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andreas-glashauser-008551252/', imgSrc: 'resources/logo_linkedIn.png', alt: 'LinkedIn Logo' },
  { name: 'Xing', url: 'https://www.xing.com/profile/Andreas_Glashauser/', imgSrc: 'resources/logo_xing.svg', alt: 'Xing Logo' },
  { name: 'Twitter', url: 'https://twitter.com/andigls', imgSrc: 'resources/logo_x.png', alt: 'Twitter Logo' },
];

const SocialMedia = () => {
  return (
    <div className="border md:h-[360px] border-customLightGray p-10 rounded-lg">
      <p className="font-semibold">
        My Socials:
      </p>
      <ol className="p-3 pt-">
        {socials.map((social, index) => (
          <li key={index} className=" p-1 pt-2">
            <a href={social.url}>
              <img height={30} width={30} src={social.imgSrc} alt={social.alt}/>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SocialMedia;
