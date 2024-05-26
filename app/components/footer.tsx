"use client";

import  SocialMediaLinks  from './socialMediaLinks';

export const Footer = () => {
  return (
    <footer className="text-center text-sm m-4 mt-8 p-4 pt-8">
      <div className="flex justify-center items-center mb-8 mt-0 md:mb-12">
        <SocialMediaLinks />
      </div>
      <span className="m-6 p-2">© 2024 Rhythm Code Studio</span>
    </footer>
  );
}
  
