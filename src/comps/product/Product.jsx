import React, { useState } from "react";
import { productslist } from "../../assets/data/data";
import { ProductCard } from "./ProductCard";

export const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL PRODUCTS");

  const categories = [
    { name: "ALL PRODUCTS", count: productslist.length },
    { name: "Phones", key: "phones" },
    { name: "iPads", key: "ipads" },
    { name: "AirPods", key: "airpods" },
    { name: "Accesories", key: "accesories" },
    { name: "Watches", key: "watches" },
    { name: "iMac", key: "imac" },
    { name: "Macbook", key: "macbook" },
    { name: "Display", key: "display" },
  ];

  const categoryCounts = categories.map((cat) => {
    if (cat.name === "ALL PRODUCTS") return cat;
    return {
      ...cat,
      count: productslist.filter((p) => p.category === cat.key).length,
    };
  });

  const filteredProducts =
    selectedCategory === "ALL PRODUCTS"
      ? productslist
      : productslist.filter(
          (product) => product.category === selectedCategory.toLowerCase()
        );

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mx-auto px-4 flex flex-wrap items-center gap-3 uppercase mb-6 overflow-x-auto">
          <h4 className="text-lg font-semibold whitespace-nowrap">
            Apple Wonderland:
          </h4>
          <div className="flex gap-3 flex-wrap items-center">
            {categoryCounts.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`text-sm px-5 py-2 rounded-lg font-medium transition-all shadow-md border ${
                  selectedCategory === cat.name
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-900 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
