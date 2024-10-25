"use client";
import { WobbleCard } from "./ui/WobbleCard";
import React, { useState } from "react";
import Image from "next/image";

import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import MagicButton from "./ui/MagicButton";
import animationData from "@/data/confetti.json";
// import { cardData } from "@/data/index"

export const cardData = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] relative",
    imgClassName: "absolute inset-0 w-full h-full object-cover",
    titleClassName: "z-10 relative justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-2 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-4 md:row-span-2",
    imgClassName: "",
    titleClassName: "bottom-0",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 relative",
    imgClassName: "absolute right-0 bottom-0 w-24 h-auto",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },


  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 relative",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

const About = () => {
  const [copied, setCopied] = useState(false);

  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "pkpavan@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <section id="about" className="p-10 flex justify-center w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-4 max-w-9xl mx-auto w-full xl:ml-32 lg:ml-16">
        {cardData?.map((card, index) => (
          <WobbleCard
            key={index}
            containerClassName={`${card.className} gradientBackground`}
          >
            <div className="max-w-xs">
              <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {card.description}
              </div>
              <div
                className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
              >
                {card.title}
              </div>

              {card.img && (
                <Image
                  src={card.img}
                  alt={card.title}
                  className={card.imgClassName}
                  width={500}
                  height={300}
                />
              )}
              {card.spareImg && (
                <img
                  src={card.spareImg}
                  alt={card.spareImg}
                  className="object-cover object-center w-full h-full"
                />
              )}
              {card.id === 6 && (
                <div className="mt-5 relative">
                  <div
                    className={`absolute -button-5 right-0 ${copied ? "block" : "block"
                      }`}
                  >
                    <Lottie options={defaultOptions} height={200} width={400} />
                  </div>
                  <MagicButton
                    title={
                      copied ? "Email is Copied!" : "Copy my email address"
                    }
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161A31]"
                  />
                </div>
              )}
              {card.id === 3 && (
                <div className="absolute bottom-0 right-0 flex gap-1 lg:gap-3 p-4">
                  {/* tech stack lists */}
                  <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
                    {leftLists.map((item, i) => (
                      <span
                        key={i}
                        className="lg:py-4 lg:px-2 py-2 px-2 text-xs lg:text-base opacity-50 
            lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                      >
                        {item}
                      </span>
                    ))}

                    <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-transparent"></span>
                  </div>

                  <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                    <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-transparent"></span>
                    {rightLists.map((item, i) => (
                      <span
                        key={i}
                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
            lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {card.id === 5 && (
                <div className="relative">
                  <img
                    src={card.spareImg}
                    alt={card.spareImg}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              )}

            </div>
          </WobbleCard>
        ))}
      </div>
    </section>
  );
};

export default About;
