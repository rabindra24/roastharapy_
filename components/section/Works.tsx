import React from "react";
import Image from "next/image";
import { OurWork } from "@/constants/constant";

const Works = () => {
  return (
    <section className=" body-font" id="works">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h3 className="md:text-6xl text-4xl font-medium title-font mb-4 ">
            Our Works
          </h3>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A glimpse of our portfolio
          </p>
        </div>
        <div className="flex flex-wrap  -m-4">
          {OurWork.map((item, idx) => (
            <div className="lg:w-1/3 sm:w-1/2 w-full p-4" key={idx}>
              <div className="flex flex-col relative space-y-4">
                <Image
                  className="w-full h-full"
                  src={item.image}
                  width={600}
                  height={300}
                  alt={item.title}
                />
                <h4 className="text-center font-thin text-2xl">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
