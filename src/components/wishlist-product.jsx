import { useDispatch } from "react-redux";
import { addProduct } from "../store/reducer/card-reducer";
import heart from "../assets/image.png";

export const WishlistProduct = (product) => {
  const dispatch = useDispatch();

  const addStore1 = () => {
    dispatch(addProduct({...product}));
  };

  return (
    <>
      <div className="relative bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300  mt-10">
        <div className="h-[250px] mb-4 overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            src={product.img}
            alt=""
          />
        </div>

        <h3 className="text-lg font-semibold mb-2 line-clamp-1">
          {product.title}
        </h3>
        <div onClick={addStore1} className="absolute top-4 right-4 cursor-pointer">
          <img src={heart} alt="" className="w-7 h-7" />
        </div>
      </div>
    </>
  );
};
