import { Divider } from "@nextui-org/react";
import { CiCircleCheck, CiMap } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoChatbubbleOutline, IoKeyOutline, IoPricetagOutline } from "react-icons/io5";
import { PiSprayBottle } from "react-icons/pi";
import { RiQuestionAnswerLine } from "react-icons/ri";

const ReviewItems = () => {
  const items = [
    {
      label: "Limpieza",
      score: "5,0",
      icon: <PiSprayBottle className="size-8 mt-auto" />,
    },
    {
      label: "Veracidad",
      score: "5,0",
      icon: <IoIosCheckmarkCircleOutline className="size-8 mt-auto" />,
    },
    {
      label: "Check-in",
      score: "5,0",
      icon: <IoKeyOutline className="size-8 mt-auto" />,
    },
    {
      label: "Comunicación",
      score: "5,0",
      icon: <IoChatbubbleOutline className="size-8 mt-auto" />,
    },
    {
      label: "Ubicación",
      score: "5,0",
      icon: <CiMap className="size-8 mt-auto" />,
    },
    {
      label: "Precio según calidad",
      score: "5,0",
      icon: <IoPricetagOutline className="size-8 mt-auto" />,
    },
  ];
  return (
    <div className="flex gap-8">
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="flex gap-4 w-36">
          <Divider orientation="vertical" className="h-full" />
          <div className="flex flex-col items-start">
            <p className="text-xl font-normal max-w-32">{item.label}</p>
            <p className="text-xl font-normal mb-2">{item.score}</p>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewItems;
