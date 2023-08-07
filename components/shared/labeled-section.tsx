import React from "react";
import Text, { TextVariation } from "./text";

export type LabeledSectionVariation = "vertical" | "horizontal";

interface LabeledSectionProps {
  variation?: LabeledSectionVariation;
  title: string;
  titleVariation?: TextVariation;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode | React.ReactNode[];
}

const LabeledSection = ({
  variation = "horizontal",
  title,
  titleVariation = "heading",
  className,
  innerClassName,
  children,
}: LabeledSectionProps) => {
  if (variation === "horizontal") {
    return (
      <div className={`${className} grid w-full grid-cols-4 gap-4 lg:gap-16`}>
        <div className="col-span-4 lg:col-span-1">
          <Text variation={titleVariation}>{title}</Text>
        </div>
        <div className={`${innerClassName} col-span-4 lg:col-span-3`}>
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${className} flex w-full flex-col`}>
        <Text variation={titleVariation}>{title}</Text>
        <div className={`${innerClassName}`}>{children}</div>
      </div>
    );
  }
};

export default LabeledSection;
