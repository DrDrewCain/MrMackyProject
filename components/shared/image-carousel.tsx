"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface ImageCarouselProps {
  children: React.ReactChild[]; // Mirror type from Carousel
}

const ImageCarousel = ({ children }: ImageCarouselProps) => {
  return (
    <Carousel
      dynamicHeight
      autoPlay
      infiniteLoop
      interval={3000}
      swipeable
      emulateTouch
      showThumbs={false}
    >
      {children}
    </Carousel>
  );
};

export default ImageCarousel;
