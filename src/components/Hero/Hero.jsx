import React from "react";
import Sale from "../../assets/sale.png";
import Shopping from "../../assets/shopping.png";
import Women from "../../assets/women.png";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    img: Women,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, in iusto consequatur architecto quod culpa?",
  },
  {
    id: 2,
    img: Shopping,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, in iusto consequatur architecto quod culpa?",
  },
  {
    id: 3,
    img: Sale,
    title: "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, in iusto consequatur architecto quod culpa?",
  },
];
const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center    dark:bg-gray-950 dark:text-white">
      {/* Background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content sectin */}
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  Lorem ipsum dolor sit.
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam, porro.
                </p>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
              {/* text content sectin */}
              <div className="order-1 sm:order-2">
                <div className="relative z-10">
                  <img
                    className="w-[300px] h-[300px] sm:h[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                    src={Women}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
