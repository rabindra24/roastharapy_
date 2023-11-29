import { banner, banner2, yellow } from "@/public/images/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Cta2 = () => {
  return (
    <section
      className=" body-font relative md:w-[90%] md:mx-auto mx-4  space-y-4"
      id="cta2"
    >
      <Image
        src={banner2}
        width={1000}
        height={400}
        className="absolute -z-10 h-full top-0 w-full object-cover object-center rounded-3xl"
        alt="call to action"
      />
      <div className="container px-5  mx-auto">
        <div className="lg:w-2/3 flex flex-col  py-14 sm:flex-row sm:items-center justify-center mx-auto">
          <div className=" w-full md:text-left text-center">
            <h1 className=" text-5xl mb-6 md:pr-10 text-white font-thin">
              Elevate your brand Today!
            </h1>
            <Link href="#contact">
              <Button className="flex-shrink-0 bg-white text-black  border-0 py-2 px-8 rounded-full text-lg mt-10 sm:mt-0 ">
                Book Call
              </Button>
            </Link>
          </div>

          <div className="max-sm:mt-10 mx-auto">
            <Image
              src={yellow}
              width={200}
              height={200}
              alt="advertising Agency"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta2;
