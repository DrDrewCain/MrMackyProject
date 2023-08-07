import React from "react";

interface OutlinedCardProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

const OutlinedCard = ({ children, className }: OutlinedCardProps) => {
  return (
    <div
      className={`${className} flex rounded-md border border-gray-200 px-12 py-8`}
    >
      {children}
    </div>
  );
};

export default OutlinedCard;
