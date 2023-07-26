import React from "react";
import Text from "./text";

interface PageHeaderProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

const PageHeader = ({ title, children }: PageHeaderProps) => {
  return (
    <div className="flex flex-col flex-wrap items-center gap-8">
      <div className="flex w-4/5 flex-col gap-6 md:w-1/2">
        <Text variation="heading" className="animate-fade-down text-center">
          {title}
        </Text>
        {children}
      </div>
      <div className="flex w-full justify-center">
        <img src="/favicon.png" className="w-40" />
      </div>
    </div>
  );
};

export default PageHeader;
