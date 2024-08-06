import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const PPCard = ({ properties }) => {
  const {
    estate_title,
    image,
    location,
    price,
    segment_name,
    status,
    description,
    area,
  } = properties;

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-once="true"
    >
      <div className="max-w-xl p-4 shadow-md text-gray-100">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-black  hover:text-sky-600">
                {estate_title}
              </h3>
            </a>
            <div className="text-black flex justify-between mr-10">
              <p className="text-sky-500 hover:text-sky-800">Price: {price}</p>
              <p>Status: {status}</p>
              <p>Area: {area}</p>
            </div>
            <p className="leading-snug text-gray-400 dark:text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPCard;
