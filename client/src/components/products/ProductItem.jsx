import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleClick = () => {
    dispatch(addProduct({ item }));
  };
  console.log(cart);
  return (
    <>
      <div
        className="product-item border hover:shadow-lg cursor-pointer transition-all select-none"
        onClick={handleClick}
      >
        <div className="product-img">
          <img
            src={item.img}
            alt=""
            className="h-28 object-hover w-full border-b"
          />
        </div>
        <div className="product-info flex flex-col p-3">
          <span className="font-bold">{item.title}</span>
          <span>{item.price} Tl</span>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
