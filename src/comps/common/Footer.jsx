import Logo from "../../assets/imgs/logo.png";
import {
  storeLinks,
  externalLinks,
  customerServices,
} from "../../assets/data/data";

export const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-900 py-14">
  <div className="container mx-auto px-4 grid grid-cols-1 text-center md:text-left md:grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
      <img src={Logo} alt="Logo" className="h-8 mb-4 mx-auto md:mx-0" />
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Call:</span> +40 771 112 300
        </p>
        <p>
          <span className="font-semibold">Email:</span> pts.tvn90@icloud.com
        </p>
        <p>
          <span className="font-semibold">Address:</span> Sfantu Gheorghe,
          CV, N.Balcescu 1
        </p>
      </div>

      <p className="mt-2">Subscribe for updates:</p>
      <div className="mt-1 flex justify-center md:justify-start">
        <input
          type="text"
          className="p-3 w-full bg-white border border-gray-400 rounded-l-lg outline-none"
          placeholder="Enter your email..."
        />
        <button className="px-4 py-3 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded-r-lg transition">
          Subscribe
        </button>
      </div>
    </div>

    <div>
      <h2 className="text-lg font-semibold mb-1">External Links</h2>
      <ul className="p-3 space-y-2">
        {externalLinks.map((link) => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h2 className="text-lg font-semibold mb-1">Customer Services</h2>
      <ul className="p-3 space-y-2">
        {customerServices.map((service) => (
          <li key={service.name}>
            <a href={service.url} target="_blank" rel="noopener noreferrer">
              {service.name}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h2 className="text-lg font-semibold mb-1">Store Links</h2>
      <ul className="p-3 space-y-2">
        {storeLinks.map((link) => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>

  <div className="container mx-auto mt-10 text-center border-t border-gray-400 pt-6 text-gray-800">
    <p>
      All rights reserved to V@jk Works! For more information, contact the
      web-app creator!
    </p>
  </div>
</footer>
  );
};
