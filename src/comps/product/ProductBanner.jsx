import { useNavigate } from "react-router-dom";
import { promotionalInformation } from "../data/data";

export const ProductBanner = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between pt-20 border">
        {promotionalInformation.map((info) => (
          <div className="box relative w-full" key={info.id}>
            <div className="p-4 md:p-6 bg-white z-10 relative lg:static flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="text-gray-300 bg-black px-6 py-2 text-sm rounded-md">
                {info.promo}
              </span>
              <h2 className="my-3 text-gray-900 text-xl font-semibold">
                {info.title}
              </h2>
              <p className="text-gray-700 max-w-md">{info.description}</p>
              <button
                className="mt-4 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-all"
                onClick={() => navigate("/product")}
              >
                Shop Now
              </button>
            </div>

            <div className="w-full h-[40vh]">
              <img
                src={info.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
