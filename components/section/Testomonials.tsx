import React from "react";
import { clients } from "@/constants/constant";
import Image from "next/image";

const Testomonials = () => {
  return (
    <section className=" body-font sm:px-10 px-5" id="testmonials">
      <div className="container px-5 py-14   ">
        <h1 className="font-semibold md:text-5xl text-3xl text-center mb-10">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {clients.map((item, idx) => (
            <div className="p-4 md:w-1/2 w-full hover:bg-primary rounded-3xl hover:text-white" key={idx}>
              <div className="h-full  p-8 rounded">
                <div className="inline-flex items-center">
                  <div className="w-[50px] h-[50px] rounded-full relative top-0 ">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="absolute w-full h-full top-0 object-cover rounded-full object-center"
                    />
                  </div>
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium ">
                      {item.name}
                    </span>
                    <span className=" text-sm">{item.post}</span>
                  </span>
                </div>
                <p className="leading-relaxed ">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testomonials;
