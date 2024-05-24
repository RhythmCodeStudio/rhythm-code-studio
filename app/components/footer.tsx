"use client";

import  SocialMediaLinks  from './socialMediaLinks';

export const Footer = () => {
  return (
    <footer className="text-center text-sm">
      <div className="flex justify-center items-center mb-6 mt-0 ">
        <SocialMediaLinks />
      </div>
      <span className="m-6" >© 2024 Rhythm Code Studio</span>
    </footer>
  );
}
  
