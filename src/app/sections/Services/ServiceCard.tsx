import { Button, Image } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ModalServicesItems from "./ModalServicesItems";

const ServiceCard = ({
  images,
  title,
  items,
}: {
  images: string[];
  title: string;
  items: { label: string; icon: React.ReactElement }[];
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
                "min-w-[200px] lg:min-w-[34%] h-[60vh] lg:h-[80vh] rounded-lg overflow-hidden flex-shrink-0",
              img: "w-full h-full object-cover",
            }}
          />
        ))}
      </div>
      <Button
        isIconOnly
        radius="full"
        className="absolute top-1/2 -translate-y-1/2 right-[1%] z-10 bg-white max-md:min-w-10 max-md:w-10 max-md:h-10"
        variant="solid"
        size="lg"
        onPress={scrollRight}
      >
        <FaChevronRight />
      </Button>
      <Button
        isIconOnly
        radius="full"
        className="absolute top-1/2 -translate-y-1/2 left-[1%] z-10 bg-white max-md:min-w-10 max-md:w-10 max-md:h-10"
        variant="solid"
        size="lg"
        onPress={scrollLeft}
      >
        <FaChevronLeft />
      </Button>
      {/* Title overlay */}
      <div className="absolute bottom-6 left-[1%] py-6 pl-4 md:pl-8 pr-10 
      w-[98%] bg-[#332F2F75] rounded-lg text-white z-10">
        <h4 className="text-2xl xl:text-3xl font-semibold mb-2">{title}</h4>
        <ModalServicesItems items={items} />
      </div>
    </div>
  );
};

export default ServiceCard;
