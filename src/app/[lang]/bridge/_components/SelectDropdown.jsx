"use client";

import { useEffect, useRef, useState } from "react";

export default function SelectDropdown({ open, setOpen, button, children }) {
  
  const ref = useRef(null);
  
  // on click outside close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div
      ref={ref}
      className="flex relative items-center gap-1 text-nowrap rounded-full bg-black py-1.5 pl-1.5 pr-3 text-lg text-gray2"
    >
      <button
        className="flex gap-2 items-center"
        onClick={() => {setOpen(!open)}}
      >
        {button}
      </button>
      {open && (
        <div className="absolute z-20 top-11 right-0 gap-3 flex flex-col rounded-xl px-3 py-3 bg-black">
          {children}
        </div>
      )}
    </div>
  );
}

