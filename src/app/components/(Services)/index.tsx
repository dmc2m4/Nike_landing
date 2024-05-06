import React from "react";
import { services } from "@/app/constants/constants";
import { ServiceCard } from "../ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9">
      {services.map((service) => (
        <ServiceCard
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        ></ServiceCard>
      ))}
    </section>
  );
};

export default Services;
