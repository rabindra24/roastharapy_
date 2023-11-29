import React from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { accordians } from "@/constants/constant";
import { Input } from "../ui/input";
import SendMail from "./SendMail";

const Accordian = () => {
  return (
    <section className=" body-font md:px-10 px-4" id="accordian">
      <div className="container px-5 py-10 md:py-24 mx-auto">
        <div className="flex md:flex-row  flex-col-reverse">
          <div className="flex flex-wrap md:w-1/2 font-medium">
            {accordians.map((item, idx) => (
              <Accordion type="single" collapsible className="w-full" key={idx}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="md:space-y-8 space-y-4 md:px-10 mb-10 px-2 ">
            <h2 className="font-semibold md:text-5xl text-3xl">
              How we can help you?
            </h2>
            <p>
              Follow our newsletter. We will regulary update our latest project
              and availability.
            </p>
            <SendMail/>
            {/* <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter Your Email"
                className="rounded-full"
              />
              <Button type="submit">Let &apos; s Talk</Button>
            </div> */}
            {/* <Button className="bg-primary text-background">
              {" "}
              Learn More &rarr;
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordian;
