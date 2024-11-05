"use client";
import ServiceCard from "./ServiceCard";
import {
  IoBookOutline,
  IoCarOutline,
  IoFlowerOutline,
  IoLockClosedOutline,
  IoSnowOutline,
  IoThermometerOutline,
  IoTvOutline,
  IoWifiOutline,
} from "react-icons/io5";
import { PiBowlSteam, PiCoffee, PiCookingPot, PiDoor, PiFireExtinguisher, PiFlowerTulip, PiForkKnife, PiOven, PiStairs, PiWashingMachine } from "react-icons/pi";
import { RiFridgeLine } from "react-icons/ri";
import { MdOutlineMicrowave } from "react-icons/md";
import { GiTable, GiWhisk } from "react-icons/gi";
import { GrToast } from "react-icons/gr";

const Services = () => {
  const serviceData = [
    {
      title: "Comedor, cocina y patio",
      images: [
        "/imgs/comedor.png",
        "/imgs/patio.png",
        "/imgs/cocina.png",
        "/imgs/patio-garage.png",
        "/imgs/comedor-mesa.png",
        "/imgs/comedor-mesa-televisor.png",
        "/imgs/comedor-estanteria.png",
      ],
      items: [
        {
          label: "Televisor",
          icon: <IoTvOutline />,
        },
        {
          label: "Libros y material de lectura",
          icon: <IoBookOutline />,
        },
        {
          label: "Cocina",
          icon: <PiCookingPot />,
          description: "Los huéspedes pueden cocinar en este espacio"
        },
        {
          label: "Wifi",
          icon: <IoWifiOutline />,
        },
        {
          label: "Estacionamiento gratis en la propiedad",
          icon: <IoCarOutline />,
          description: "Hasta autos de 3 metros de largo"
        },
        {
          label: "Vista al patio",
          icon: <IoFlowerOutline />,
        },
        {
          label: "Lavarropas",
          icon: <PiWashingMachine />,
        },
        {
          label: "Seguros en las ventanas",
          icon: <IoLockClosedOutline />,
        },
        {
          label: "AC: Sistema sin conductos tipo split",
          icon: <IoSnowOutline />,
        },
        {
          label: "Patio",
          icon: <PiFlowerTulip />
        },
        {
          label: "Calefacción radiante",
          icon: <IoThermometerOutline />,
        },
        {
          label: "Extintor de incendios",
          icon: <PiFireExtinguisher />,
        },
        {
          label: "Heladera",
          icon: <RiFridgeLine />
        },
        {
          label: "Microondas",
          icon: <MdOutlineMicrowave />
        }, {
          label: "Utensilios básicos de cocina",
          description: "Ollas y sartenes, aceite, sal y pimienta",
          icon: <GiWhisk />
        }, {
          label: "Vajilla y cubiertos",
          description: "Bols, palitos chinos, platos, tazas, etc.",
          icon: <PiForkKnife />
        }, {
          label: "Horno a gas",
          icon: <PiOven />
        }, {
          label: "Pava eléctrica",
          icon: <PiBowlSteam />
        }, {
          label: "Cafetera: cafetera de filtro",
          icon: <PiCoffee />
        }, {
          label: "Tostadora",
          icon: <GrToast />
        }, {
          label: "Mesa de comedor",
          icon: <GiTable />
        }, {
          label: "Entrada independiente",
          description: "Entrada por otra calle o edificio",
          icon: <PiDoor />
        }, {
          label: "Alojamiento de un solo piso",
          description: "Alojamiento sin escaleras",
          icon: <PiStairs />
        }
      ],
    },
  ];
  return (
    <section
      className="w-full px-[7.5vw] flex flex-col gap-4 items-center bg-foreground text-white rounded-3xl py-20 shadow"
    >
      <h3 className="text-5xl font-bold">¿Qué ofrecemos?</h3>
      {serviceData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  );
};

export default Services;
