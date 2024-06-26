import React from "react";
import { Button } from "../button";
import Image from "next/image";
import { iconUrl } from "@/app/constants/constants";

const SpecialOffer = () => {
  const offer = "/assets/images/offer.svg";
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <Image
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        ></Image>
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl w-full capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red "> Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={iconUrl}></Button>
          <Button
            label="Learn more"
            className="bg-white border-slate-gray text-slate-gray"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
