"use client";

import { cn } from "@/lib/utils";

const Button = ({ title = "Click me", onClick = () => {}, className = "" }) => {
  return (
    <button
      className={cn(
        "w-full rounded-md bg-primary px-5 py-3 font-medium text-black sm:px-8",
        className,
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
