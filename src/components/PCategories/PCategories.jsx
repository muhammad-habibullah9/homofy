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
      {/* card */}
      <div className="lg:flex gap-5">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Single-Family Homes</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Townhouses</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Multi-Family</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt=""
              className="rounded-xl"
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
