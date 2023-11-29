"use client";
import React, { useState, useRef, MutableRefObject } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import emailjs from "@emailjs/browser";
import { Loader, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const form = useRef();
  const [data, SetData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [connect, setConnect] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setConnect(true);

    await emailjs
      .sendForm(
        "service_xujivbr",
        "template_z6bo8p6",
        form.current,
        "_OEaGAgVpOI2Qq1rQ"
      )
      .then(
        (result) => {
          setConnect(false);
          toast({
            title: "We will Contact You 😃.",
            description: "Have a Good Day",
          });
        },
        (error) => {
          setConnect(false);
        }
      );
  };

  return (
    <section className=" body-font relative" id="contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="font-semibold md:text-5xl text-3xl text-center">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mt-1 mx-auto leading-relaxed text-base">
            Connect with us to amplify your growth journey. We&apos;re here for
            you!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form className="flex flex-wrap -m-2" ref={form} onSubmit={sendEmail}>
            <div className="p-2 w-1/2">
              <div className="relative">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="user_name"
                  className="w-full"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="user_email"
                  className="w-full"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <Label htmlFor="tel">Number</Label>
                <Input
                  id="tel"
                  type="tel"
                  name="user_number"
                  className="w-full "
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" />
              </div>
            </div>
            <div className="p-2 w-full ">
              {connect ? (
                <Button className="w-[100px]">
                  <Loader2 className="animate-spin" />
                </Button>
              ) : (
                <Button type="submit">Connect</Button>
              )}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
