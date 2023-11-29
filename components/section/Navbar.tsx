"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  CalendarDaysIcon,
  ChevronDownIcon,
  MoonIcon,
  PhoneIcon,
  PlayCircleIcon,
  SunIcon,
} from "@heroicons/react/20/solid";
import { navbar } from "@/constants/constant";
import Image from "next/image";
import { logo, nightlogo } from "@/public/images/images";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mode, setMode] = useState(true);
  const { theme, setTheme } = useTheme();

  const handleMode = () => {
    setMode(!mode);
    if (mode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Roastharapy</span>
            {theme === "dark" ? (
              <Image
                className="md:h-14 h-10 w-auto"
                src={nightlogo}
                alt="Roastharapy || Advertising"
              />
            ) : (
              <Image
                className="md:h-14 h-10 w-auto"
                src={logo}
                alt="Roastharapy || Advertising"
              />
            )}
          </a>
        </div>

        <div className="md:hidden">
          {theme === "dark" ? (
            <SunIcon
              onClick={() => handleMode()}
              className="rounded-full  text-yellow-500 w-[30px] h-[30px]"
            />
          ) : (
            <MoonIcon
              onClick={() => handleMode()}
              className="rounded-full  text-primary w-[30px] h-[30px] "
            />
          )}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 items-center">
          {navbar.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              className="text-sm font-semibold leading-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
          {/* <div onClick={() => handleMode()}> */}
          {theme === "light" ? (
            <SunIcon
              onClick={() => handleMode()}
              className="rounded-full  text-yellow-500 w-[30px] h-[30px]"
            />
          ) : (
            <MoonIcon
              onClick={() => handleMode()}
              className="rounded-full  text-primary w-[30px] h-[30px] "
            />
          )}

          {/* </div> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#contact" className=" text-sm font-semibold leading-6 text-gray-900">
            Book a Call <span aria-hidden="true">&rarr;</span>
          </a> */}
          <a href={"#contact"}>
            <Button
              className="rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {" "}
              Book a Call
            </Button>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm ">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              {theme === "light" ? (
                <Image
                  className="h-10 w-auto"
                  src={logo}
                  alt="Roastharapy || Advertising"
                />
              ) : (
                <Image
                  className="h-10 w-auto"
                  src={nightlogo}
                  alt="Roastharapy || Advertising"
                />
              )}
            </a>
            {theme === "dark" ? (
              <SunIcon
                onClick={() => handleMode()}
                className="rounded-full  text-yellow-500 w-[30px] h-[30px]"
              />
            ) : (
              <MoonIcon
                onClick={() => handleMode()}
                className="rounded-full  text-primary w-[30px] h-[30px] "
              />
            )}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y ">
              <div className="space-y-2 py-6">
                {navbar.map((item, idx) => (
                  <button
                    key={idx}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-foreground hover:text-background"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <a href={item.link}>{item.title}</a>
                  </button>
                ))}
              </div>
              <div className="py-6">
                <a href={"#contact"}>
                  <Button
                    className="rounded-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {" "}
                    Book a Call
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
