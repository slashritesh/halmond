import React from "react";

const ProductCard = () => {
  return (
    <div className="p-5 border">
      <div className="bg-orange-100 h-60"></div>
      <div className="mt-5">
        <div>
          <h2>Linen shirt cotten</h2>
          <p className="text-sm">brand name</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">220$</p>
          <button className="p-2 text-base px-5 bg-orange-100">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
