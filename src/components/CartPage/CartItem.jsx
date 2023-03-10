import { useDispatch } from "react-redux";
import { decrease, deleteCart, increase } from "../../redux/products/actions";
import "../../styles/output.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const {
    productId,
    productName,
    category,
    imageUrl,
    price,
    quantity,
    cartQuantity,
  } = item;

  const handleIncrement = () => {
    if (cartQuantity < quantity) {
      dispatch(increase(productId));
    }
  };

  const handleDecrement = () => {
    if (cartQuantity > 0) {
      dispatch(decrease(productId));
    }
  };

  const handleDelete = () => {
    dispatch(deleteCart(productId));
  };

  let total = price * cartQuantity;
  let disabled = false;

  if (cartQuantity < 0) {
    disabled = true;
  } else {
    disabled = false;
  }

  if (cartQuantity === 0) {
    return null; // don't show any cart UI if cartQuantity is 0
  }

  return (
    <div>
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          {/* <!-- cart image --> */}
          <img className="lws-cartImage" src={imageUrl} alt="product" />
          {/* <!-- cart item info --> */}
          <div className="space-y-2">
            <h4 className="lws-cartName">{productName}</h4>
            <p className="lws-cartCategory">{category}</p>
            <p>
              BDT <span className="lws-cartPrice">{price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/* <!-- amount buttons --> */}
          <div className="flex items-center space-x-4">
            <button className="lws-incrementQuantity">
              <i
                className="text-lg fa-solid fa-plus"
                onClick={handleIncrement}
              ></i>
            </button>
            <span className="lws-cartQuantity">{cartQuantity}</span>
            <button className="lws-decrementQuantity">
              <i
                className="text-lg fa-solid fa-minus"
                onClick={handleDecrement}
              ></i>
            </button>
          </div>
          {/* <!-- price --> */}
          <p className="text-lg font-bold">
            BDT <span className="lws-calculatedPrice">{total}</span>
          </p>
        </div>
        {/* <!-- delete button --> */}
        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button className="lws-removeFromCart">
            <i
              className="text-lg text-red-400 fa-solid fa-trash"
              onClick={handleDelete}
              disabled={disabled}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
