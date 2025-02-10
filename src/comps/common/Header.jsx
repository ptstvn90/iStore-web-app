import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/imgs/logo.png";
import { IoSearchOutline, IoMenu, IoClose } from "react-icons/io5";
import { ModalCart } from "../cart/ModalCart";
import { productslist } from "../../assets/data/data";

export const Header = ({ products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  

  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const closeMenuOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMenuOutside);
    return () => document.removeEventListener("mousedown", closeMenuOutside);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase().trim();
    setSearchQuery(query);
  
    console.log("Search Query:", query);
    console.log("Products List:", products);
  
    if (!products || products.length === 0) {
      setFilteredProducts([]);
      return;
    }
  
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  
    console.log("Filtered Products:", filtered);
    setFilteredProducts(filtered);
  };

  return (
    <header className="px-6 py-4 bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-8 rounded-md cursor-pointer"
          />
        </a>

        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-black">
            HOME
          </a>
          <a href="/product" className="text-gray-700 hover:text-black">
            PRODUCTS
          </a>
          <a href="/support" className="text-gray-700 hover:text-black">
            SUPPORT
          </a>
          <a href="/about" className="text-gray-700 hover:text-black">
            ABOUT
          </a>
        </nav>

        <div className="flex items-center gap-6 text-gray-900 relative">
          <IoSearchOutline
            size={24}
            className="hover:text-gray-600 cursor-pointer transition"
            onClick={() => setShowSearch(!showSearch)}
          />

          {showSearch && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg p-3 rounded-md w-64">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {searchQuery && (
                <div className="mt-2 bg-white border border-gray-300 rounded-md shadow-md">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <a
                        key={product.id}
                        href={`/product/${product.id}`}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {product.title}
                      </a>
                    ))
                  ) : (
                    <p className="px-4 py-2 text-gray-500">No results found</p>
                  )}
                </div>
              )}
            </div>
          )}

          <ModalCart />

          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white shadow-lg rounded-lg mt-3 absolute w-[90%] left-1/2 transform -translate-x-1/2 top-16 p-5 flex flex-col space-y-4"
        >
          <a href="/" className="text-gray-700 hover:text-black">
            HOME
          </a>
          <a href="/product" className="text-gray-700 hover:text-black">
            PRODUCTS
          </a>
          <a href="/support" className="text-gray-700 hover:text-black">
            SUPPORT
          </a>
          <a href="/about" className="text-gray-700 hover:text-black">
            ABOUT
          </a>
        </div>
      )}
    </header>
  );
};
