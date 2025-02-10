import { useDispatch } from "react-redux";

import StripeCheckout from "react-stripe-checkout";

export const CheckOutForm = ({ total, handlePaymentSucces }) => {
  const dispatch = useDispatch();

  const handleToken = (token) => {
    handlePaymentSucces();
    dispatch(clearCart());
  };

  return (
    <>
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51QmbmzK3wVHeQogaSCpWs0mHRLiwwXv2HzYAt36XtU8Ia187x2fyHDHB1dpYCyziWK7ffiqI3dTXnhJ6YC9RAutM00xrKy5oqY"
        amount={total * 100}
        name="frontend learning"
        email="istvan.pete90@gmail.com"
        description="Payment test using stripe"
      >
        <button className="w-full bg-gray-300 py-3.5 my-3 font-medium primary-btn">
          Pay ${total?.toFixed(2)}
        </button>
      </StripeCheckout>
    </>
  );
};
