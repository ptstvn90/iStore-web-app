import { useDispatch } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { favoriteActions } from "../../redux/favouriteSlice";

export const FavouriteProduct = ({ id, cover, name, price, quantity }) => {
  const dispatch = useDispatch();
  const removeCartItems = () => {
    dispatch(favoriteActions.removeFromFavorites(id));
  };

  return (
    <>
      <div className="mt-5 border-b-2 border-gray-300 pb-5">
        <div className="flex items-center gap-4">
          <div className="image w-20 h-20">
            {cover && cover.length > 0 && (
              <img
                src={cover[0]}
                alt=""
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="details w-1/2">
            <p>{name}</p>
            <p className="text-gray-900">
              {quantity} x ${price}
            </p>
          </div>
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-black ">
            <IoCloseOutline
              size={25}
              onClick={removeCartItems}
              className="cursor-pointer"
            />
          </button>
        </div>
      </div>
    </>
  );
};
