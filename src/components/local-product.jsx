import React from "react";
import { useDispatch } from "react-redux";
import { formatter } from "../config/formatter";
import {
  incrementProduct,
  decrimentProduct,
  deleteProduct,
} from "../store/reducer/card-reducer";

const LocalProduct = (product) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-wrap justify-center gap-4 items-start hover:shadow-lg transition-all duration-300">
      <div className="w-40 h-40 rounded-xl overflow-hidden">
        <img
          src={product.img}
          alt="img"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
          <p className="text-gray-700 font-medium">
            {formatter(product.userPrice)}{" "}
            <span className="text-sm text-gray-500">UZS</span>
          </p>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => dispatch(incrementProduct({ id: product.id }))}
            className="w-9 h-9 flex items-center justify-center bg-blue-500 text-white rounded-xl 
                   hover:bg-blue-600 active:scale-95 transition"
          >
            +
          </button>

          <span className="text-lg font-semibold">{product.userCount}</span>

          {product.userCount < 2 ? (
            <button
              onClick={() => dispatch(deleteProduct({ id: product.id }))}
              className="w-9 h-9 flex items-center justify-center bg-red-500 text-white rounded-xl
                     hover:bg-red-600 active:scale-95 transition"
            >
              X
            </button>
          ) : (
            <button
              onClick={() => dispatch(decrimentProduct({ id: product.id }))}
              className="w-9 h-9 flex items-center justify-center bg-amber-500 text-white rounded-xl
                     hover:bg-amber-600 active:scale-95 transition"
            >
              -
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocalProduct;
