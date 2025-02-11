import { FiBox } from "react-icons/fi";
import { IoIosColorFilter } from "react-icons/io";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdOutlineLocalShipping } from "react-icons/md";
import { ownersPosts } from "../data/data";

const filterDiscoverItems = [
  {
    id: 1,
    title: "Add to Cart",
    icon: <IoBagRemoveOutline size={70} />,
    description:
      "Select the product what you really want to own, be part of the latest technologies.",
  },
  {
    id: 2,
    title: "Fast Shipping",
    icon: <MdOutlineLocalShipping size={70} />,
    description: "You can get the bought product in less than 48 hours.",
  },
  {
    id: 3,
    title: "Enjoy the Product",
    icon: <FiBox size={70} />,
    description:
      "Enjoy the world of iOS, one of the most stable and innovating technologies in the world.",
  },
  {
    id: 4,
    title: "Filter & Discover",
    icon: <IoIosColorFilter size={70} />,
    description: "Find and discover the universe of Apple Products",
  },
];

export const OwnerShipPosts = () => {
  return (
    <>
      <DiscoverReviews />
      <section className="post grid-cols-1 grid md:grid-cols-3 lg:grid-cols-6">
        {ownersPosts.map((post) => (
          <>
            <div className="h-72 lg:h-80 overflow-hidden" key={post.id}>
              <img
                src={post.image}
                alt=""
                className="w-full h-full object-cover transition-transform ease-in-out hover:-rotate-12 hover:scale-110"
              />
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export const DiscoverReviews = () => {
  return (
    <>
      <section className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 bg-gray-200">
        {filterDiscoverItems.map((post) => (
          <>
            <div className="flex items-center gap-8 p-8 py-12 relative">
              <div className="icon">
                <i>{post.icon}</i>
              </div>
              <div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
};
