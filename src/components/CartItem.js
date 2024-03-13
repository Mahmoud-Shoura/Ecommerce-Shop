import React from "react";
// mport Link
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  // destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div>
          {/* title & remove icon */}
          <div>
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
