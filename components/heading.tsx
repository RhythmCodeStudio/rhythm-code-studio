// write a react component using typescript for nextjs v 15 with tailwind v 4 called Heading that accepts props of text, headingLevel (1-6), and className. The component should render the appropriate heading element (h1-h6) based on the headingLevel prop, with the text prop as its content. The className prop should be applied to the heading element for additional styling. Ensure proper type definitions for the props.


"use client";// import from react
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
