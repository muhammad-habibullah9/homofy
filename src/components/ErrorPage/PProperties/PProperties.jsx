import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PPCard from "./PPCard";
import { FiUser, FiMessageCircle, FiStar } from "react-icons/fi";

import "animate.css";
import PCategories from "../../PCategories/PCategories";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const PProperties = () => {
  const properties = useLoaderData();
  const [visible, setVisible] = useState(4);
  console.log(properties);

  const handelShowMore = () => {
    setVisible((prevValue) => prevValue + 6);
  };
  return (
    <div>
      <div className="md:mx-20 mx-5">
        <div className="my-10 text-center">
          <h1 className="lg:text-4xl md:text-4xl text-2xl font-extrabold text-black">
            POPULAR PROPERTIES
          </h1>
        </div>
        <div className="inline-grid md:grid-cols-2 gap-10">
          {properties.slice(0, visible).map((property) => (
            <PPCard key={property.id} properties={property}></PPCard>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button onClick={handelShowMore} className="btn text-center">
            Show more
          </button>
        </div>
      </div>
      {/* Qualified Employees */}
      <div className="grid md:grid-cols-3 gap-10 bg-slate-100 md:mt-20 mt-10 px-5 py-10">
        <div className="p-5 flex gap-5">
          <div>
            <h1 className="md:text-4xl text-2xl">
              <FiUser />
            </h1>
          </div>
          <div>
            <h1 className="md:text-3xl text-xl font-semibold text-black">
              Qualified Employees
            </h1>
            <p
              className="text-gray-700"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Our team consists of more than 20 qualified and experienced real
              estate brokers and property managers ready to help you
            </p>
          </div>
        </div>
        <div className="flex gap-5 p-5">
          <div>
            <h1 className="md:text-4xl text-xl">
              <FiMessageCircle />
            </h1>
          </div>
          <div>
            <h1 className="md:text-3xl text-xl font-semibold text-black">
              FreeConsultations
            </h1>
            <p
              className="text-gray-700"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Our acquaintance with a client always begins with a free
              consultation to find our what kind of property they are looking
              for.
            </p>
          </div>
        </div>
        <div className="flex gap-5 p-5">
          <div>
            <h1 className="md:text-4xl text-xl">
              <FiStar />
            </h1>
          </div>
          <div>
            <h1 className="md:text-3xl text-xl font-semibold text-black">
              100% Guaranteed
            </h1>
            <p
              className="text-gray-700"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              All the results that you get from our realtors are 100% guaranteed
              to offer you the best choice of properties throughout the USA
            </p>
          </div>
        </div>
      </div>
      <div className="md:mx-20 mx-5">
        <PCategories></PCategories>
      </div>
    </div>
  );
};

export default PProperties;
