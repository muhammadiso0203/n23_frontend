import { useSelector } from "react-redux";
import { WishlistProduct } from "../components/wishlist-product";

export const Wishlist = () => {
  const { productList } = useSelector(
    (state) => state.product
  );

  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-5">
        {productList.map((item) => (
          <WishlistProduct key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
