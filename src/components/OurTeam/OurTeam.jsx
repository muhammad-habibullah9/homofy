import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const OurTeam = () => {
  return (
    <div className="p-4 pt-10 bg-slate-100">
      <h1
        className="text-4xl font-semibold mb-10 text-center text-black"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="2000"
      >
        Our Team
      </h1>

      <div className="grid lg:grid-cols-2 gap-10 align-middle">
        {/* card 1 */}
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="p-8 sm:flex sm:space-x-6">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src="https://source.unsplash.com/100x100/?portrait?1"
                alt=""
                className="object-cover object-center w-full h-full rounded bg-gray-500 dark:bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-gray-900">
                  Alice Johnson
                </h2>
                <span className="text-sm text-gray-400 dark:text-gray-600">
                  Senior Real Estate Agent
                </span>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Phonenumber"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                    ></path>
                  </svg>
                  <span className="text-gray-400 dark:text-gray-600">
                    +1-555-1234
                  </span>
                </span>
                <span>
                  <p className=" text-gray-400 dark:text-gray-600">
                    Alice is a senior real estate agent with over 10 years of
                    experience in the industry. She specializes in residential
                    properties and has a deep understanding of the local market.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="p-8 sm:flex sm:space-x-6">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src="https://source.unsplash.com/100x100/?portrait?1"
                alt=""
                className="object-cover object-center w-full h-full rounded bg-gray-500 dark:bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-gray-900">
                  Bob Smith
                </h2>
                <span className="text-sm text-gray-400 dark:text-gray-600">
                  Marketing Specialist
                </span>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Phonenumber"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                    ></path>
                  </svg>
                  <span className="text-gray-400 dark:text-gray-600">
                    +1-555-5678
                  </span>
                </span>
                <span>
                  <p className=" text-gray-400 dark:text-gray-600">
                    Bob is a marketing specialist who excels in creating
                    effective marketing campaigns for real estate properties. He
                    has a keen eye for detail and a passion for innovative
                    marketing strategies.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <div className="p-8 sm:flex sm:space-x-6">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src="https://source.unsplash.com/100x100/?portrait?1"
                alt=""
                className="object-cover object-center w-full h-full rounded bg-gray-500 dark:bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-gray-900">
                  Carol White
                </h2>
                <span className="text-sm text-gray-400 dark:text-gray-600">
                  Property Manager
                </span>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Phonenumber"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                    ></path>
                  </svg>
                  <span className="text-gray-400 dark:text-gray-600">
                    +1-555-8765
                  </span>
                </span>
                <span>
                  <p className=" text-gray-400 dark:text-gray-600">
                    Carol is a property manager with extensive experience in
                    managing both residential and commercial properties. She is
                    known for her excellent organizational skills and dedication
                    to her clients.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <div className="p-8 sm:flex sm:space-x-6">
            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src="https://source.unsplash.com/100x100/?portrait?1"
                alt=""
                className="object-cover object-center w-full h-full rounded bg-gray-500 dark:bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-black dark:text-gray-900">
                  David Brown
                </h2>
                <span className="text-sm text-gray-400 dark:text-gray-600">
                  Customer Service Representative
                </span>
              </div>
              <div className="space-y-1">
                <span className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-label="Phonenumber"
                    className="w-4 h-4"
                  >
                    <path
                      fill="currentColor"
                      d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                    ></path>
                  </svg>
                  <span className="text-gray-400 dark:text-gray-600">
                    +1-555-4321
                  </span>
                </span>
                <span>
                  <p className=" text-gray-400 dark:text-gray-600">
                    David is a customer service representative who is committed
                    to providing exceptional service to all clients. He is
                    always ready to assist with any inquiries and ensure a
                    smooth experience for everyone.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
