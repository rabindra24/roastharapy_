import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { main } from "@/public/images/images";
import SendMail from './SendMail'

const Landing = () => {
  return (
    <section className=" body-font" id="landing">
      <div className="container mx-auto flex md:px-14 max-md:pt-14 md:flex-row flex-col items-center">
        <div className="lg:flex-grow  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
          <h1 className="title-font sm:text-8xl text-6xl mb-4 font-bold">
            We Take <span className="text-primary">Care</span> of Your Brand
          </h1>
          <p className="mb-8 leading-relaxed">
            We care about our work and we care about our clients.
          </p>
          <SendMail/>

          {/* //remove */}
          {/* <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Enter Your Email"  className="rounded-full"/>
            <Button type="submit">Let &apos; s Talk</Button>
          </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="Embrace || Advertising"
            width={500}
            height={500}
            src={main}
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
