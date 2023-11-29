import { google } from "@/public/images/images";
import Image from "next/image";
import React from "react";
import { company } from "@/constants/constant";

const Comapanies = () => {
  return (
    <section className=" body-font" id="companies">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="capitalize font-semibold text-center mb-10 lg:text-4xl md:text-3xl text-2xl">
          Companies we Work with
        </h2>
        <div className="flex flex-wrap -m-4 text-center">
          {company.map((item, idx) => (
            <div className="p-4 sm:w-1/4 w-1/2" key={idx}>
              <Image
                src={item.image}
                width={100}
                height={50}
                alt={item.image}
                className="mx-auto  h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comapanies;
