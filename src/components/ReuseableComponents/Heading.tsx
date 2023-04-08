import React from "react";

export default function Heading({ bold, normal }) {
  return (
    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-black  border-2 border-black p-1">
      {bold} <span className="text-gray-800 font-normal">{normal}</span>
    </span>
  );
}
