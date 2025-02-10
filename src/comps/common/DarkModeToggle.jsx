import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectTheme } from "../redux/themeSlice";
import { IoMoon, IoSunny } from "react-icons/io5";

export const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition duration-300"
    >
      {theme === "dark" ? (
        <IoSunny size={20} className="text-yellow-400" />
      ) : (
        <IoMoon size={20} className="text-gray-800" />
      )}
    </button>
  );
};
