import React from "react";
import { reviews } from "@/app/constants/constants";
import { ReviewCard } from "../ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Wath Our
        <span className="text-coral-red "> Customers </span>
        say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-1 mt-20 flex-col md:flex-row justify-evenly items-center mx-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          ></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
