"use client";
// import from react
// import { useState } from "react";
// import background images
// import funk from "/images/backgrounds/funk.png";
// import blues from "/images/backgrounds/blues.png";

export default function Background() {
  // const [bgImage, setBgImage] = useState("funk");

  // const toggleBackground = () => {
  //   setBgImage((prev) => (prev === "funk" ? "blues" : "funk"));
  // };

  return (
    <>
      <div
        // className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
         className="fixed top-0 left-0 w-screen min-h-screen -z-10 bg-cover bg-center bg-black"
        // style={{
        //   backgroundImage: `url(${bgImage === "funk" ? funk.src : blues.src})`,
        // }}
        style={{
           backgroundImage: "url(/images/backgrounds/funk.avif), url(/images/backgrounds/funk.webp), url(/images/backgrounds/funk.png)",
        }}
      />
      <div className="fixed top-0 left-0 w-full h-full -z-20 bg-black opacity-50" />
      {/* Toggle button */}
      {/* <button
        className="fixed bottom-4 left-4 z-30 px-4 py-2 bg-white bg-opacity-80 border-2 rounded-2xl shadow"
        onClick={toggleBackground}
      >
        Select Theme
      </button> */}
    </>
  );
}