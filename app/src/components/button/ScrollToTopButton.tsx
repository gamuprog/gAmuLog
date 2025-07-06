"use client";

import { SlArrowUp } from "react-icons/sl";

export default function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="w-12 h-44 fixed bottom-6 right-10 px-2 py-2 bg-white bg-opacity-60 text-slate-700 hidden md:flex flex-col items-center"
    >
      <div className="relative h-10 w-7 mb-4">
        <SlArrowUp className="absolute top-2 left-1" />
        <SlArrowUp className="absolute top-4 left-1" />
      </div>
      <div className="relative h-32 w-24">
        <div className="w-24 rotate-90 text-xl absolute top-8">PAGE TOP</div>
      </div>
    </button>
  );
}
