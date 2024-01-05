"use client";
/* eslint-disable @next/next/no-img-element */
// TestimonialCarousel.tsx

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
interface Testimonial {
  feedback: string;
  name: string;
  designation: string;
  profileUrl: string;
}

interface TestimonialCarouselProps {
  data: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  return (
    <div className="flex justify-between items-center bg-purple-200 p-6 gap-4 h-60 mt-8">
      <button
        onClick={prevSlide}
        className="text-black p-2 rounded-full  h-8 w-8 bg-gray-400"
      >
        <IoIosArrowBack />
      </button>
      {data.length > 0 ? (
        data.map((testimonial, index) => (
          <div
            key={index}
            className={`flex justify-center items-center flex-col ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            <p className="text-gray-800 text-center font-semibold text-2xl">
              {"“"}
              {testimonial.feedback}
              {"”"}
            </p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.profileUrl}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-700">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl font-bold">No testimonials</p>
        </div>
      )}
      <button
        onClick={nextSlide}
        className="text-black p-2 rounded-full  h-8 w-8 bg-gray-400"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
