"use client";

import React from "react";
import { Button } from "../button";
import Image from "next/image";
import {
  statistics,
  shoes,
  bigShoe1,
  iconUrl,
} from "@/app/constants/constants";
import { ShoeCard } from "../ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-48">
        <p className="text-xl font-monserrat text-coral-red">
          Our summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={iconUrl}></Button>
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Image
          src={bigShoeImg}
          alt="shoe collection"
          className="object-contain relative z-10"
          width={550}
          height={490}
        ></Image>
        <div className="flex sm:ml-[101px] sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:p-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imageURL={shoe.thumbnail}
                changeBigShoeImage={(shoe: string) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImage=""
              ></ShoeCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
