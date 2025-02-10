import { BiChat } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";

const additionalInformation = [
  {
    id: 1,
    title: "24/7 SUPPORT - ON CALL",
    description:
      "Our Team is available 24/7 to help with any questions or concerns about the products.",
    icon: <MdOutlineMarkUnreadChatAlt size={50} />,
  },
  {
    id: 2,
    title: "FREE DELIVERY",
    description:
      "Enjoy free delivery on all Orders - No minimum purchase required.",
    icon: <FaShippingFast size={50} />,
  },

  {
    id: 3,
    title: "MONEY BACK GUARANTEE",
    description:
      "We offer a 100% Money-back Guarantee in case of the product you bought has problems what are covered by the guarrante policy.",
    icon: <FaCircleDollarToSlot size={50} />,
  },
];

export const ShippingInformation = () => {
  return (
    <>
      <section className="container mx-auto px-2 mb-5">
        <div className="py-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {additionalInformation.map((info) => (
            <div
              key={info.id}
              className="flex items-center justify-center flex-col text-center gap-3"
            >
              <div className="text-black">{info.icon}</div>
              <h3 className="text-xl font-bold mt-4">{info.title}</h3>
              <p className="mt-2">{info.description}</p>
            </div>
          ))}
        </div>
        <div className="box bg-black p-8 flex flex-col lg:flex-row items-center justify-between rounded-xl">
          <div className="left flex items-center gap-3">
            <BiChat size={110} color="white" />
            <div className="">
              <h2 className="text-white leading-none">
                SUBSCRIBE FOR THE LATEST PROMOTIONS
              </h2>
              <p className="text-gray-300">
                Get the Latest News, Discounts & Offers.
              </p>
            </div>
          </div>
          <div className="left w-full p-5 px-8 lg:w-1/2 relative">
            <input
              type="mail"
              className="outline-none w-full p-3 bg-white rounded-xl"
              placeholder="Fill with your e-mail address here..."
            />
          </div>
        </div>
      </section>
    </>
  );
};
