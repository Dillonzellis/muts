"use client";

import { slides } from "@/lib/data/slides";
import { useState, useEffect, useRef } from "react";

import { Slide } from "./Slide";
import Container from "@/app/layouts/Container";

type SliderProps = {
  slides: typeof slides;
};

export const SliderWrapper = ({ slides }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);

  const startInterval = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    slideIntervalRef.current = window.setInterval(nextSlide, 5000);
  };

  const stopInterval = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = null;
    }
  };

  const handlePause = () => {
    setIsPaused(true);
    stopInterval();
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
      startInterval();
    }, 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    if (!isPaused) startInterval();

    return () => {
      stopInterval();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [isPaused, slides]);

  return (
    <div>
      <div className="tw-bg-brandingBlue-400">
        <div className="hero tw-relative tw-mx-auto">
          <Container>
            <div className="tw-absolute tw-top-1/2 tw-z-10 tw--translate-y-[70%]">
              <div className="slide tw-flex tw-max-w-prose tw-flex-col tw-gap-8 tw-text-white">
                {slides.map((slide, index) => (
                  <Slide
                    key={index}
                    active={index === currentSlide}
                    {...slide}
                  />
                ))}
              </div>
            </div>
          </Container>
          <img
            className="tw-h-[500px] tw-w-full tw-border-t-8 tw-border-brandingBlue-400 tw-object-cover tw-brightness-75 md:tw-h-[750px] md:tw-border-t-0"
            src="http://dev2.growthbydesign.org/wp-content/uploads/BG.jpg"
            alt="hero img"
            width={1920}
            height={750}
          />
          <img
            className="tw-max:hidden tw-absolute tw-bottom-0 tw-w-full tw-object-cover"
            src="http://dev2.growthbydesign.org/wp-content/uploads/Waves.png"
            alt=""
            width={1920}
            height={200}
          />
          <button
            className="prev slide-btn tw-relative tw-z-50 tw-text-black"
            onClick={prevSlide}
          >
            Previous
          </button>
          <button
            className="next slide-btn tw-relative tw-z-50 tw-text-black"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
