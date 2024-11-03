import { Button, Image } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const ServiceCard = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative w-full  overflow-hidden rounded-lg">
      {/* Carousel Images */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide gap-2 scroll-smooth relative"
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${title} ${index + 1}`}
            classNames={{
              wrapper:
                "min-w-[200px] h-[70vh] rounded-lg overflow-hidden flex-shrink-0",
              img: "w-full h-full object-cover",
            }}
          />
        ))}
      </div>
      <Button
        isIconOnly
        radius="full"
        className="absolute top-1/2 -translate-y-1/2 right-6 z-10"
        variant="bordered"
        onPress={scrollRight}
      >
        <FaChevronRight />
      </Button>
      <Button
        isIconOnly
        radius="full"
        className="absolute top-1/2 -translate-y-1/2 left-6 z-10"
        variant="bordered"
        onPress={scrollLeft}
      >
        <FaChevronLeft />
      </Button>
      {/* Title overlay */}
      <div className="absolute bottom-6 left-6 w-full p-4 bg-foreground bg-opacity-50 text-white z-10">
        <h4 className="text-3xl font-semibold">{title}</h4>
      </div>
    </div>
  );
};

export default ServiceCard;
