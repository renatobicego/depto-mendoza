import { Divider } from "@nextui-org/react";
import { Fragment } from "react";
import { CiCircleCheck, CiMap } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import {
  IoChatbubbleOutline,
  IoKeyOutline,
  IoPricetagOutline,
} from "react-icons/io5";
import { PiSprayBottle } from "react-icons/pi";

const ReviewItems = () => {
  const items = [
    {
      label: "Limpieza",
      score: "5,0",
      icon: <PiSprayBottle className="size-6 flex-shrink-0 md:size-8 lg:mt-auto" />,
    },
    {
      label: "Veracidad",
      score: "5,0",
      icon: <IoIosCheckmarkCircleOutline className="size-6 flex-shrink-0 md:size-8 lg:mt-auto" />,
    },
    {
      label: "Check-in",
      score: "5,0",
      icon: <IoKeyOutline className="size-6 flex-shrink-0 md:size-8 lg:mt-auto" />,
    },
    {
      label: "Comunicación",
      score: "5,0",
      icon: <IoChatbubbleOutline className="size-6 flex-shrink-0 md:size-8 lg:mt-auto" />,
    },
    {
      label: "Ubicación",
      score: "5,0",
      icon: <CiMap className="size-6 flex-shrink-0 md:size-8 lg:mt-auto" />,
    },
    {
      label: "Precio según calidad",
      score: "5,0",
      icon: <IoPricetagOutline className="size-6 flex-shrink-0 md:size-8 lg:mt-auto" />,
    },
  ];
  return (
    <div className="flex gap-4 md:gap-8 w-full flex-wrap justify-center">
      {items.map((item, index) => (
        <Fragment key={`${item.label}-${index}`}>
          <div className="flex gap-4 w-36 hover:scale-105 transition-all max-lg:hidden">
            <Divider orientation="vertical" className="h-full" />
            <div className="flex flex-col items-start">
              <p className="text-xl font-normal max-w-32">{item.label}</p>
              <p className="text-xl font-normal mb-2">{item.score}</p>
              {item.icon}
            </div>
          </div>
          <div className="flex items-start gap-2 w-[45%] md:w-40 lg:hidden">
            {item.icon}
            <div className="flex flex-col items-start max-w-[80%]">
              <p className="text-lg font-normal break-words  md:max-w-32">{item.label}</p>
              <p className="text-lg font-normal mb-2">{item.score}</p>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default ReviewItems;
