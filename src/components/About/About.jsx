import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import OurTeam from "../OurTeam/OurTeam";

const About = () => {
  return (
    <div className=" dark:bg-gray-100 dark:text-gray-800">
      <div>
        {/* about section */}
        <div className="bg-[url(https://i.ibb.co/zfk1xs8/01.jpg)] bg-center lg:h-1/2 h-dvh">
          <Navbar></Navbar>
          <div className="lg:h-96 h-dvh space-y-5 flex items-center pl-10 bg-slate-100 bg-opacity-30">
            <div className="space-y-5">
              <h4 className="text-2xl lg:text-3xl text-slate-50 ">
                __About us
              </h4>
              <h1 className="text-4xl lg:text-6xl text-white font-bold ">
                About Us
              </h1>
            </div>
          </div>
        </div>
        {/* who are */}
        <div>
          <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <div
                rel="noopener noreferrer"
                href="#"
                className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
              >
                <img
                  src="https://i.ibb.co/zfk1xs8/01.jpg"
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-6 dark:bg-gray-500"
                />
                <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-4xl">
                    WHO WE ARE
                  </h3>
                  <p className="leading-relaxed">
                    At Homofy, we offer a full range of real estate services to
                    meet all your needs. Whether you're looking to rent a
                    building, buy a property, sell land, or design a building,
                    our experienced team is here to help you every step.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Why people choose us */}
        <div className="text-center my-10 dark:bg-gray-100 dark:text-gray-800">
          <div>
            <h1 className="text-2xl lg:text-5xl font-bold">
              WHY PEOPLE CHOOSE US
            </h1>
          </div>
          <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-4">
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-2xl font-bold leading-none lg:text-6xl">
                  50+
                </p>
                <p className="text-sm sm:text-base">National Partners</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-2xl font-bold leading-none lg:text-6xl">
                  375
                </p>
                <p className="text-sm sm:text-base">Properties</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-2xl font-bold leading-none lg:text-6xl">
                  13
                </p>
                <p className="text-sm sm:text-base">Years of Experience</p>
              </div>
              <div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-2xl font-bold leading-none lg:text-6xl">
                  58
                </p>
                <p className="text-sm sm:text-base">Qualified Brokers</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <OurTeam />
      <Footer />
    </div>
  );
};

export default About;
