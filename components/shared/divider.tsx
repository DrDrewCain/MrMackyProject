import React from "react";

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return <div className={`${className} my-4 h-[1px] bg-black`} />;
};

export default Divider;
