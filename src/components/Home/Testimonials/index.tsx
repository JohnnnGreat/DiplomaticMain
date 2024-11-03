"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "./constants";

const Testimonials = () => {
   return (
      <div className="max-w-[1000px] mx-auto py-[3rem] px-[1rem]">
         <h1 className="text-[3rem]">What Our Students are Saying!!!</h1>
         <Carousel
            opts={{
               align: "start",
               loop: true,
            }}
            plugins={[
               Autoplay({
                  delay: 2000,
               }),
            ]}
            className=" rounded-md max-w-[100%] p-8 relative "
         >
            <CarouselContent aria-label="Testimonials">
               {testimonials.map((testimonial, idx) => (
                  <CarouselItem>
                     <div className="h-full flex flex-col justify-between space-y-2 w-full border p-[2rem] rounded">
                        <p className="text-lg text-gray-800  mb-2">"{testimonial.feedback}"</p>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-500">{testimonial.designation}</p>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
      </div>
   );
};

export default Testimonials;
