import React from "react";
import { CgArrowLeft, CgArrowRight } from "react-icons/cg";
import { FLASH_SALE_PRODUCT } from "../assets/dummydata/dummyProduct";
import {
  AiOutlineShoppingCart,
  AiFillEye,
  AiOutlineHeart,
} from "react-icons/ai";

import { RiArrowUpDownFill } from "react-icons/ri";
import CustomStar from "./ReuseableComponents/CustomStar";
import Heading from "./ReuseableComponents/Heading";
import Banner from "./ReuseableComponents/Banner";
import ImgCarousel from "./ReuseableComponents/ImgCarousel";
import Badge from "./ReuseableComponents/Badge";

//product component
const Product = ({ product }) => {
  return (
    <div className="p-2 border mt-4 group">
      <Badge status={product.status} />
      <div className="p-2">
        <div className=" md:h-[150px] ">
          <ImgCarousel img={product.img} />
        </div>
        <p className="text-gray-500 font-medium">{product.category}</p>
        <h3 className="text-black font-medium hover:underline cursor-pointer">
          {product.p_name}
        </h3>
        <div className="block group-hover:hidden h-12 mt-2">
          <CustomStar star={product.star} />
          <p className="text-teal-700 font-medium">
            ${product.curr_price}{" "}
            <span className="text-stone-500 line-through text-[11px]">
              ${product.price}
            </span>
          </p>
        </div>
        <div className="hidden group-hover:block h-12 mt-2">
          <div className="grid grid-cols-3 divide-x content-center justify-items-center">
            <AiFillEye className="text-black hover:text-white hover:bg-black h-8 w-8  rounded-full p-2" />
            <AiOutlineHeart className="text-black hover:text-white hover:bg-black h-8 w-8  rounded-full p-2" />
            <RiArrowUpDownFill className="text-black hover:text-white hover:bg-black h-8 w-8  rounded-full p-2" />
          </div>
        </div>
        <button className="inline-flex items-center bg-emerald-100 hover:bg-emerald-600 hover:text-white text-emerald-800 transition-all w-full text-center justify-center p-2 rounded-md mt-3">
          Add To Cart{" "}
          <span className="ml-2">
            <AiOutlineShoppingCart />
          </span>
        </button>
      </div>
    </div>
  );
};
export default function FlashSaleProduct() {
  return (
    <div className="py-10 px-2 sm:px-10">
      <div className=" grid grid-cols-5 gap-3">
        <div className="col-span-5 lg:col-span-4">
          <div className="flex items-center justify-center">
            <Heading bold="Flash" normal="Sale Product" markUp="h1" />

            <p className="ml-3 font-bold text-sm">
              <span className="bg-[#D3D1F3] px-2 py-1 rounded-md">2d</span> :{" "}
              <span className="bg-[#D3D1F3] px-2 py-1 rounded-md">12h</span> :
              {"  "}
              <span className="bg-[#D3D1F3] px-2 py-1 rounded-md">
                45m
              </span> :{" "}
              <span className="bg-[#D3D1F3] px-2 py-1 rounded-md">12s</span>
            </p>
            <div className="flex sm:flex-1"></div>
            <div className="flex gap-3 ml-2 sm:ml-5">
              <CgArrowLeft className="hover:bg-black hover:text-white rounded-full text-2xl " />
              <CgArrowRight className="hover:bg-black hover:text-white rounded-full text-2xl " />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {FLASH_SALE_PRODUCT.map((product) => (
              <Product product={product} key={product.category} />
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative">
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
}
