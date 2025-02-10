import { useState, useEffect } from "react";
import { IoCartOutline, IoHeartOutline, IoCloseOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux"; 
import { selectTotalQuantity, selectTotalPrice } from "../../redux/cartSlice";
import { selectTotalFavorites } from "../../redux/favouriteSlice";
import { CartProduct } from "./CartProduct";
import { CheckOutForm } from "../cart/CheckOutForm";
import { FavouriteProduct } from "../cart/FavoriteProduct";

import { NavLink } from "react-router-dom";

export const ModalCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("cart");

  
  const dispatch = useDispatch();

  const totalQuantity = useSelector(selectTotalQuantity);
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectTotalPrice);
  const totalFavorite = useSelector(selectTotalFavorites);
  const favoriteItems = useSelector(
    (state) => state.favorites.favoritesItemList
  );

  const openCart = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCart = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

 
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));  
    }
  }, [cartItems]);  

  return (
    <>
      <button className="relative" onClick={openCart}>
        <IoHeartOutline size={28} className="cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {totalFavorite}
        </span>
      </button>

      <button className="relative ml-4" onClick={openCart}>
        <IoCartOutline size={28} className="cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {totalQuantity}
        </span>
      </button>

      {isOpen && (
        <>
          <div className="cartoverlay" onClick={closeCart}>
            <div className={`cartmodel p-16 text-black ${isClosing ? "closing" : ""}`}>
              <button
                onClick={closeCart}
                className="absolute top-4 right-4 text-black"
              >
                <IoCloseOutline size={30} />
              </button>

              <div className="flex justify-between border-b pb-2">
                <button
                  className={`w-1/2 text-center py-2 ${
                    activeTab === "cart"
                      ? "border-b-2 border-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("cart")}
                >
                  Shopping Cart ({totalQuantity})
                </button>
                <button
                  className={`w-1/2 text-center py-2 ${
                    activeTab === "wishlist"
                      ? "border-b-2 border-black"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("wishlist")}
                >
                  Wishlist ({totalFavorite})
                </button>
              </div>

              <div className="flex-1 overflow-y-auto mt-4">
                {activeTab === "cart" ? (
                  cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      <CartProduct key={item.id} {...item} />
                    ))
                  ) : (
                    <p className="text-center text-gray-500">
                      Your cart is empty
                    </p>
                  )
                ) : favoriteItems.length > 0 ? (
                  favoriteItems.map((item) => (
                    <FavouriteProduct key={item.id} {...item} />
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    Your wishlist is empty
                  </p>
                )}
              </div>

              {activeTab === "cart" && cartItems.length > 0 && (
                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Subtotal:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <CheckOutForm total={totalPrice} />
                  <NavLink to="/cart" className="block mt-4">
                    <button className="w-full bg-black text-white py-2 rounded-md primary-btn">
                      View Cart
                    </button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
