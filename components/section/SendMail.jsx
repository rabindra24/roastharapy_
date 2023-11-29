"use client";
import React, { useState, useRef, MutableRefObject } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import emailjs from "@emailjs/browser";

const SendMail = () => {
  const { toast } = useToast();
  const form = useRef();
  const [connect, setConnect] = useState(false);
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
    <form
      className="flex w-full max-w-sm items-center space-x-2"
      ref={form}
      onSubmit={sendEmail}
    >
      <Input
        type="email"
        placeholder="Enter Your Email"
        className="rounded-full"
      />
      <Button type="submit">Let &apos; s Talk</Button>
    </form>
  );
};

export default SendMail;
