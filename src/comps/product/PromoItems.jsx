import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { promolist } from "../data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-5 right-5 md:right-10 bg-black text-white p-2 rounded-full cursor-pointer shadow-md hover:bg-gray-800 transition"
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={30} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-5 left-5 md:left-10 bg-black text-white p-2 rounded-full cursor-pointer shadow-md z-10 hover:bg-gray-800 transition"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={30} />
    </div>
  );
}

export const Promo = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden">
      <section className="min-h-screen md:min-h-[70vh] lg:min-h-[90vh] mt-12 bg-gray-100 relative rounded-xl shadow-xl flex items-center justify-center">
        <Slider {...settings} className="w-full">
          {promolist.map((item) => (
            <PromoItem
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export const PromoItem = ({ title, description, price, image }) => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 lg:px-16 min-h-screen md:min-h-[70vh] lg:min-h-[90vh]">
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <img
          src={image}
          alt="Product"
          className="max-w-full h-auto object-contain rounded-xl shadow-md"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left mt-5">
        <h2 className="text-gray-900 font-bold text-2xl md:text-4xl lg:text-6xl leading-tight">
          {title}
        </h2>
        <p className="text-gray-700 mt-3 md:mt-5 text-sm md:text-base lg:text-lg">
          {description}
        </p>
        <div className="mt-4 md:mt-6">
          <p className="text-gray-500 text-sm md:text-base">Price</p>
          <h2 className="text-gray-900 font-semibold text-lg md:text-2xl mt-1">
            ${price}
          </h2>
        </div>
        <button
          className="mt-5 md:mt-7 bg-black text-white py-2 px-5 md:py-3 md:px-6 rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105"
          onClick={() => navigate("/product")}
        >
          View in Shop
        </button>
      </div>
    </section>
  );
};
