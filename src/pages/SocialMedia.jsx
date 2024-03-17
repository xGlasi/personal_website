import React from 'react';

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/xGlasi",
    imgSrc: "/resources/logo_github.png",
    alt: "GitHub Logo",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andreas-glashauser-008551252/",
    imgSrc: "/resources/logo_linkedIn.png",
    alt: "LinkedIn Logo",
  },
  {
    name: "Xing",
    url: "https://www.xing.com/profile/Andreas_Glashauser/",
    imgSrc: "/resources/logo_xing.svg",
    alt: "Xing Logo",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/andigls",
    imgSrc: "/resources/logo_twitter.png",
    alt: "Twitter Logo",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity duration-200"
        >
          <img src={link.imgSrc} alt={link.alt} width="30" height="30" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
