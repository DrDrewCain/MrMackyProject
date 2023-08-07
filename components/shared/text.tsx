import React from "react";

export type TextVariation =
  | "title"
  | "heading"
  | "subheading"
  | "subsubheading"
  | "headinglabel"
  | "paragraphheading"
  | "paragraph"
  | "caption"
  | "label";

interface TextProps {
  className?: string;
  variation?: TextVariation;
  children: React.ReactNode | React.ReactNode[];
}

const variationStyles = {
  title: "text-3xl font-bold",
  heading: "text-2xl font-semibold",
  subheading: "text-xl font-bold",
  subsubheading: "text-lg font-semibold",
  headinglabel: "text-lg font-light text-gray-400",
  paragraphheading: "text-base font-semibold",
  paragraph: "text-base",
  caption: "text-sm text-gray-500",
  label: "text-xs",
};

const Text = ({ variation = "paragraph", className, children }: TextProps) => {
  return (
    <div>
      <p className={`${className} ${variationStyles[variation]}`}>{children}</p>
    </div>
  );
};

export default Text;
