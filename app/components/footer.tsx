"use client";

import  SocialMediaLinks  from './socialMediaLinks';

export const Footer = () => {
  return (
    <footer className="text-center text-sm p-12">
      <div className="flex justify-center items-center m-12">
        <SocialMediaLinks />
      </div>
      <span className='p-6 m-6' >© 2024 Rhythm Code Studio</span>
    </footer>
  );
}
  
