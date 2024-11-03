import { IoBalloonOutline, IoLanguageOutline } from "react-icons/io5";
import { PiGlobeStand, PiGraduationCap, PiTooth } from "react-icons/pi";

const AboutMeItems = () => {
  const items = [
    {
      text: "Nació en la década de los 70",
      icon: <IoBalloonOutline className="size-8"/>,
    },
    {
      text: "Mi trabajo: Odontóloga",
      icon: <PiTooth className="size-8"/>,
    },
    {
      text: "Vive en Las Heras, Argentina",
      icon: <PiGlobeStand className="size-8"/>,
    },
    {
      text: "Estudié en Universidad Nacional de Cuyo",
      icon: <PiGraduationCap className="size-8"/>,
    },
    {
      text: "Habla Inglés e Italiano",
      icon: <IoLanguageOutline className="size-8"/>,
    },
  ];
  return (
    <ul className="flex flex-col gap-4 max-w-[50%]">
      {items.map((item, index) => (
        <li className="flex gap-1 items-center" key={index}>
          {item.icon}
          <p className="text-lg">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default AboutMeItems;
