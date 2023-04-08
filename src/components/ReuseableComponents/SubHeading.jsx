import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
export default function SubHeading({ bold, normal }) {
  return (
    <div className="flex justify-between items-center py-4">
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-black  border-black p-1">
        {bold} <span className="text-gray-800 font-normal">{normal}</span>
      </p>
      <div className="flex gap-3">
        <CgArrowLeft className="hover:bg-black hover:text-white rounded-full text-2xl " />
        <CgArrowRight className="hover:bg-black hover:text-white rounded-full text-2xl " />
      </div>
    </div>
  );
}
