import { useDispatch, useSelector } from "react-redux";
import { CartActions, selectTotalPrice } from "../../redux/cartSlice";
import BackgroundImage from "/imgs/cart_backg.jpg";
import { IoCloseOutline } from "react-icons/io5";
import StripeCheckout from "react-stripe-checkout";

export const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectTotalPrice) || 0;
  const dispatch = useDispatch();

  const handleToken = (token) => {
    console.log(token);
    dispatch(CartActions.clearCart());
  };

  return (
    <section className="mt-16 flex flex-col items-center justify-center min-h-screen w-full p-4">
      <div className="relative w-full h-64">
        <img
          src={BackgroundImage}
          alt="Cart Background"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 mt-8 w-full">
        <div className="w-full lg:w-2/3 overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-300 rounded-lg">
            <thead className="text-xs text-gray-800 uppercase bg-gray-200">
              <tr>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Subtotal</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartPageCard key={item.id} {...item} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full lg:w-1/3 bg-gray-200 p-5 rounded-xl">
          <p className="text-lg font-medium text-black">Cart Total</p>
          <hr className="my-2 h-[2px] bg-gray-300" />
          <div className="flex justify-between text-lg font-medium text-black">
            <p>Subtotal</p>
            <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
          </div>
          <hr className="my-3 h-[2px] bg-gray-300" />
          <div className="flex justify-between text-lg font-medium text-black">
            <p>Shipping</p>
            <p className="text-sm font-normal">Enter your address</p>
          </div>
          <div className="flex justify-between text-lg font-medium text-black mt-2">
            <p>Total</p>
            <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-center mt-4">
            <StripeCheckout
              token={handleToken}
              stripeKey="pk_test_51QmbmzK3wVHeQogaSCpWs0mHRLiwwXv2HzYAt36XtU8Ia187x2fyHDHB1dpYCyziWK7ffiqI3dTXnhJ6YC9RAutM00xrKy5oqY"
              amount={totalPrice * 100}
              name="Frontend Learning"
              email="istvan.pete90@gmail.com"
              description="Payment test using Stripe"
            >
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Proceed To Checkout
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CartPageCard = ({
  id,
  cover = [],
  name = "",
  price = 0,
  quantity = 1,
  totalPrice = 0,
}) => {
  const dispatch = useDispatch();

  return (
    <tr className="border-b bg-white hover:bg-gray-50">
      <td className="p-4 text-center">
        {cover.length > 0 && (
          <img
            src={cover[0]}
            alt={name}
            className="w-20 h-20 object-cover mx-auto"
          />
        )}
      </td>
      <td className="px-6 py-4 text-center flex justify-center gap-2">
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-12 mt-7 text-center border border-gray-300 outline-none"
        />
      </td>
      <td className="px-6 py-4 text-center">${price.toFixed(2)}</td>
      <td className="px-6 py-4 text-center">${totalPrice.toFixed(2)}</td>
      <td className="px-6 py-4 text-center">
        <button
          className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-800 transition"
          onClick={() => dispatch(CartActions.removeFromAllCart(id))}
        >
          <IoCloseOutline size={20} />
        </button>
      </td>
    </tr>
  );
};
