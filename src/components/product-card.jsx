import { useDispatch } from "react-redux";
import { formatter } from "../config/formatter";
import { addProduct } from "../store/reducer/card-reducer";
import heart from "../assets/image.png";

export const ProductCard = (product) => {
  const price = +product?.price?.split(" ").join("");
  const dispatch = useDispatch();

  const addStore = () => {
    dispatch(addProduct({ ...product, price }));
  };

  return (
    <>
      <div className="relative bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300  mt-10">
        <div className="h-[250px] mb-4 overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            src={product.img}
            alt={product.title}
          />
        </div>

        <h3 className="text-lg font-semibold mb-2 line-clamp-1">
          {product.title}
        </h3>

        <p className="text-gray-700 font-medium mb-3">
          {formatter(price)} <span className="text-sm text-gray-500">UZS</span>
        </p>

        <button
          onClick={addStore}
          className="bg-green-500 text-white py-2 px-4 rounded-xl w-full font-medium
               hover:bg-green-600 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Add
        </button>
        <div className="absolute top-4 right-4 cursor-pointer">
          <img src={heart} alt="" className="w-7 h-7" />
        </div>
      </div>
    </>
  );
};
