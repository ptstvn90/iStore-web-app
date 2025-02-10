import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { CartActions } from "../../redux/cartSlice";
import { favoriteActions } from "../../redux/favouriteSlice";

export const ProductCard = ({
  id,
  title,
  description,
  image,
  price,
  category,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const addToCart = () => {
    dispatch(CartActions.addToCart({ id, title, price, image }));
  };

  const addToFavorites = () => {
    dispatch(
      favoriteActions.addToFavorites({
        id,
        title,
        price,
        image,
        category,
      })
    );
  };

  return (
    <>
      <div className="container mx-auto px-2">
        <div className="product-card bg-gray-50 shadow-lg border border-gray-200 rounded-lg p-4 transition-transform duration-300 hover:scale-105">
          <div className="images h-96 overflow-hidden rounded-md relative">
            <img
              src={Array.isArray(image) ? image[0] : image}
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />

            <div className="overlay flex items-center gap-2 justify-center absolute bottom-4 left-0 right-0 bg-white/80 backdrop-blur-md p-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={openModal}
                className="quick-view-btn product-btn primary-btn"
              >
                Quick View
              </button>
              <button onClick={addToCart} className="product-btn primary-btn">
                <IoCart size={23} />
              </button>
              <button
                onClick={addToFavorites}
                className="product-btn primary-btn"
              >
                <IoMdHeart size={23} />
              </button>
            </div>
          </div>

          <div className="details flex flex-col items-center bg-white pt-6">
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-gray-900 font-bold">Price: ${price}</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-lg relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition"
              onClick={closeModal}
            >
              <IoMdClose size={20} />
            </button>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <img
                  src={Array.isArray(image) ? image[0] : image}
                  alt={title}
                  className="w-full h-auto rounded-md"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-700 text-lg">${price}</p>
                <p className="text-gray-600 mt-3">{description}</p>

                <div className="flex items-center gap-3 mt-4">
                  <button className="primary-btn" onClick={addToFavorites}>
                    Add to Favorites
                  </button>
                  <button className="primary-btn" onClick={addToCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
