import React from "react";
import Heading from "./ReuseableComponents/Heading";
import SubHeading from "./ReuseableComponents/SubHeading";
import {
  FOR_HEALTH,
  FOR_WINTER,
  FOR_WOMEN,
} from "../assets/dummydata/dummyProduct";
import CustomStar from "./ReuseableComponents/CustomStar";
import Badge from "./ReuseableComponents/Badge";

const ProductCard = ({ product }) => {
  return (
    <div className="p-2 border bg-white shadow-sm mb-4">
      <div className="flex gap-x-3">
        <div>
          <Badge status={product.status} />
        </div>
        <div className="pt-5">
          <img src={product.img} alt="product" className="w-32" />
        </div>
        <div className="col-span-2 px-4 py-3">
          <CustomStar star="5.0" />
          <p className="text-black font-medium hover:underline cursor-pointer">
            {product.p_name}
          </p>
          <p className="text-teal-700 font-medium">
            ${product.curr_price}{" "}
            <span className="text-stone-500 line-through text-[11px]">
              ${product.price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function TrendingProduct() {
  return (
    <div className="px-2 sm:px-10 bg-stone-50">
      <div className="pt-10 mb-10 ">
        <Heading bold="Trending" normal="Product" size="xl" />
        <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="pt-4">
            <SubHeading bold="Fasion" normal="For Women" />
            {FOR_WOMEN.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
            <button className="w-full bg-black text-white transition-all  text-center justify-center p-2 rounded-md mt-3 font-semibold text-sm tracking-wide">
              VIEW ALL
            </button>
          </div>
          <div className="pt-4">
            <SubHeading bold="Food" normal="For For Health" />
            {FOR_HEALTH.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
            <button className="w-full bg-black text-white transition-all  text-center justify-center p-2 rounded-md mt-3 font-semibold text-sm tracking-wide">
              VIEW ALL
            </button>
          </div>
          <div className="pt-4">
            <SubHeading bold="Cosmetics" normal="For Winter" />
            {FOR_WINTER.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
            <button className="w-full bg-black text-white transition-all  text-center justify-center p-2 rounded-md mt-3 font-semibold text-sm tracking-wide">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
