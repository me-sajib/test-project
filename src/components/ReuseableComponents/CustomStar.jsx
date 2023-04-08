import React from "react";
import { AiFillStar } from "react-icons/ai";
export default function CustomStar({ star }) {
  return (
    <div className="flex items-center text-amber-500 ">
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <span className="text-stone-400 ml-2">({star})</span>
    </div>
  );
}
