import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const OffersTestimonial = () => {
  return (
    <div>
      <div className="bg-[url(https://i.ibb.co/zfk1xs8/01.jpg)] bg-center lg:h-1/2 h-dvh">
        <div className="text-center  bg-slate-500 bg-opacity-30 space-y-5 lg:h-1/2 h-dvh lg:py-20 py-10">
          <dir>
            <h1
              className="font-semibold text-2xl text-white"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <span className="font-bold lg:text-5xl text-3xl">
                BEST OFFERS{" "}
              </span>
            </h1>
            <p className="text-white text-2xl lg:mt-5">of September</p>
          </dir>
          <p
            className="text-white lg:px-80 text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            With a variety of accountants available at our company, you can
            always choose one that fits your corporate requirements.
          </p>
          <button
            className="btn text-white bg-sky-500 border-none px-10 rounded-md"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            READ MORE
          </button>
        </div>
      </div>
      {/* Testimonial */}
      <div className="my-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container flex lg:flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src="https://source.unsplash.com/100x100/?portrait"
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Albert Webb</h4>
                    <span className="text-xs dark:text-gray-600">
                      Regular Client
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>
                  I have just bought an apartment in LA thanks to you and your
                  brokers. Everything went smooth and easy, the price was quite
                  affordable, and I’m sure I will use your services again in the
                  future.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src="https://source.unsplash.com/100x100/?portrait"
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Kelly McMillan</h4>
                    <span className="text-xs dark:text-gray-600">
                      Regular Client
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>
                  I have recently sold my rental property in Nelson via inHouse.
                  Everything about the sale was made seamless by your team. You
                  gave me great advice about what was necessary to expedite the
                  sale.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src="https://source.unsplash.com/100x100/?portrait"
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Harold Barnett</h4>
                    <span className="text-xs dark:text-gray-600">
                      Regular Client
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>
                  I really appreciate your time and expertise in helping me find
                  and buy my current home in Seattle, WA. Hope we can do
                  business again in the future and I will recommend you to
                  family and friends.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src="https://source.unsplash.com/100x100/?portrait"
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Bill Warner</h4>
                    <span className="text-xs dark:text-gray-600">
                      Regular Client
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>
                  I have just sold a property with inHouse and I can’t thank
                  them enough. Their team has great communication skills and
                  they have regularly communicated with me throughout the whole
                  process.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src="https://source.unsplash.com/100x100/?portrait"
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Ann Lee</h4>
                    <span className="text-xs dark:text-gray-600">
                      Regular Client
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>
                  Your skilled team helped me make the dream of selling my old
                  property a reality. The sale went smoothly, and I just closed
                  on an ideal new place I am excited to call home. Thank you for
                  your great services!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src="https://source.unsplash.com/100x100/?portrait"
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Peter Clarkson</h4>
                    <span className="text-xs dark:text-gray-600">
                      Regular Client
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>
                  I have to say that inHouse has the best brokers we've ever
                  worked with. Their professionalism, personality, attention to
                  detail, responsiveness and ability to close the deal are
                  outstanding!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OffersTestimonial;
