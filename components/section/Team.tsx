import { frame } from "@/public/images/images";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Team = () => {
  return (
    <section className=" body-font md:px-10 px-4" id="team">
      <div className="container px-5 py-10 md:py-24 mx-auto">
        <div className="flex md:flex-row  flex-col-reverse">
          <div className="flex flex-wrap md:w-1/2 text-center">
            {/* {commitment.map((item, idx) => (
              <div className="p-4  w-1/2" key={idx}>
                <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                  {item.value}
                </h2>
                <p className="leading-relaxed">{item.content}</p>
              </div>
            ))} */}
            <Image
              src={frame}
              width={400}
              height={300}
              className="w-full"
              alt="Out team"
            />
          </div>
          <div className="md:space-y-8 space-y-4 md:px-10 mb-10 px-2 max-sm:text-center">
            <h2 className="font-semibold md:text-5xl text-3xl">
              Meet Our Team
            </h2>
            <p>
              Discover the brilliance behind Embrace. Our team blends innovation
              and artistry to craft digital wonders that captivate
            </p>
            {/* <Button> Learn More &rarr;</Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
