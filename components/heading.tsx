"use client";
// import from react
import React, { JSX, FC } from "react";

interface HeadingProps {
  text: string;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Heading: FC<HeadingProps> = ({ text, headingLevel, className }) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={`${className}`}>
      {text}
    </HeadingTag>
  );
};

export default Heading;
