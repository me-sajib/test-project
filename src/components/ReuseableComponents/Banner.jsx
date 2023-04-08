import { CgArrowRight } from "react-icons/cg";

export default function Banner() {
  return (
    <div className="h-[640px]  md:h-[473px]">
      <img
        src="/img/banner.png"
        className="h-full w-full object-cover rounded-md"
        alt="background"
      />
      <img
        src="/img/b-1.png"
        alt="bigSale"
        className="absolute top-10 left-20 sm:left-0 md:left-5 md:top-10 "
      />
      <img
        src="/img/b-2.png"
        alt="soundbox"
        className="absolute hidden xl:block md:bottom-5 md:left-12 md:h-1/3"
      />
      <h6 className="absolute bottom-2/4 left-36 md:left-16 tracking-[7px] text-white font-medium">
        MEGA DEAL
      </h6>
      <button className=" absolute bottom-[280px] md:bottom-[200px] w-full inline-flex items-center text-center justify-center p-2 rounded-md mt-3 text-amber-500 font-bold tracking-wider">
        Shop Now
        <span className="ml-2 ">
          <CgArrowRight />
        </span>
      </button>
    </div>
  );
}
