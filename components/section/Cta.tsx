import { banner } from "@/public/images/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Cta = () => {
  return (
    <section
      className=" body-font relative md:w-[90%] md:mx-auto mx-4 text-center "
      id="cta"
    >
      <Image
        src={banner}
        width={1000}
        height={400}
        className="absolute -z-10 h-full top-0 w-full object-cover object-center rounded-3xl"
        alt="call to action"
      />
      <div className="container px-5  mx-auto">
        <div className="lg:w-2/3 flex flex-col  py-14 sm:flex-row sm:items-center items-start mx-auto max-md:space-y-5">
          <h1 className="flex-grow sm:pr-16 text-5xl  text-white font-thin">
            Elevate your brand Today!
          </h1>
          <div className="md:text-left">
            <p className="text-white mb-2">
              Ready to transform your digital dresence? Let &apos; s create
              magic together! book our services now!
            </p>
            <Link href={"#contact"} scroll={true}>
              <Button className="flex-shrink-0 bg-white text-black  border-0 py-2 px-8 rounded-full text-lg mt-10 sm:mt-0">
                Book Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
