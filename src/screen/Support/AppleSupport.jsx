import { FaApple, FaLaptop, FaTabletAlt, FaClock, FaHeadphones, FaTv } from "react-icons/fa";

export const AppleSupport = () => {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-12">
          <img
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_heroes/hero-banner-support-home.image.large_2x.jpg"
            alt="Apple Support"
            className="rounded-xl mx-auto"
          />
        </div>
        <h2 className="text-3xl font-bold mb-8">Apple Support for Customers</h2>
        <p className="mt-3 mb-5">Please select a product category to continue with the Apple product you're experiencing issues with.</p>
        <div className="flex justify-center gap-8 text-gray-700">
          <div>
            <FaApple className="text-4xl mx-auto cursor-pointer" onClick={() => window.open('https://support.apple.com/iphone', '_blank')}/>
            <p>iPhone</p>
          </div>
          <div>
            <FaLaptop className="text-4xl mx-auto" onClick={() => window.open('https://support.apple.com/mac', '_blank')}/>
            <p>Mac</p>
          </div>
          <div>
            <FaTabletAlt className="text-4xl mx-auto" onClick={() => window.open('https://support.apple.com/ipad', '_blank')}/>
            <p>iPad</p>
          </div>
          <div>
            <FaClock className="text-4xl mx-auto" onClick={() => window.open('https://support.apple.com/watch', '_blank')}/>
            <p>Watch</p>
          </div>
          <div>
            <FaHeadphones className="text-4xl mx-auto" onClick={() => window.open('https://support.apple.com/airpods', '_blank')}/>
            <p>AirPods</p>
          </div>
          <div>
            <FaTv className="text-4xl mx-auto" onClick={() => window.open('https://support.apple.com/tv', '_blank')}/>
            <p>TV</p>
          </div>
        </div>
        <div className="mb-12 mt-14">
          <img
            src="https://www.indiaistore.com/files/uploads/apple_care/desktop/02.jpg"
            alt="Apple Support"
            className="rounded-xl mx-auto"
          />
        </div>
      </div>
    </div>
    </>
    
  );
};
