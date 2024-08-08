import React from "react";

const PCategories = () => {
  return (
    <div>
      <div className="text-center my-10 space-y-3">
        <h1 className="md:text-4xl text-2xl font-bold text-black">
          RESIDENTIAL PROPERTY CATEGORIES
        </h1>
        <p className="text-base md:mx-60 text-gray-700">
          At our agency, we work with various types of residential real estate
          property. You can find out more about our properties by browsing our
          website.
        </p>
      </div>
      {/* card-1 */}
      <div className="lg:flex lg:gap-5 gap-6">
        <div className="card bg-base-100 shadow-xl lg:w-96">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co/Xz4fcm4/06.jpg"
              alt=""
              className="rounded-xl lg:h-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Single-Family Homes</h2>
          </div>
        </div>
        {/* card-2 */}
        <div className="card bg-base-100 shadow-xl lg:w-96">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co/sJsgJ7N/07.jpg"
              alt=""
              className="rounded-xl lg:h-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Townhouses</h2>
          </div>
        </div>
        {/* card-3 */}
        <div className="card bg-base-100 shadow-xl lg:w-96">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co/CbVDrKq/08.jpg"
              alt=""
              className="rounded-xl lg:h-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Multi-Family</h2>
          </div>
        </div>
        {/* card-4 */}
        <div className="card bg-base-100 shadow-xl lg:w-96">
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co/mT6pPFg/09.jpg"
              alt=""
              className="rounded-xl lg:h-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Condominiums</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn my-10">VIEW ALL PROPERTIES</button>
      </div>
    </div>
  );
};

export default PCategories;
