import { google } from "@/public/images/images";
import Image from "next/image";
import React from "react";
import { company } from "@/constants/constant";
import { commitment } from "@/constants/constant";

const Commitments = () => {
  return (
    <section className=" body-font" id="commitment">
      <div className="container px-5 py-10 md:py-24 mx-auto">
        <div className="flex md:flex-row  flex-col-reverse">
          <div className="flex flex-wrap md:w-1/2 text-center">
            {commitment.map((item, idx) => (
              <div className="p-4  w-1/2" key={idx}>
                <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                  {item.value}
                </h2>
                <p className="leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="md:space-y-8 space-y-4 md:px-10 mb-10 px-2 max-sm:text-center">
            <h2 className="font-semibold md:text-5xl text-3xl">Commitments</h2>
            <p>
              We are committed to working with you collaboratively to understand
              your goals and create a strategy that will achieve them.
            </p>
            {/* <p className="text-primary">Learn More &rarr;</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitments;
