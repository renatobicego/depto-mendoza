"use client";
import ServiceCard from "./ServiceCard";
import {
  IoBookOutline,
  IoCalendarOutline,
  IoCarOutline,
  IoFlowerOutline,
  IoLockClosedOutline,
  IoSnowOutline,
  IoThermometerOutline,
  IoTvOutline,
  IoWifiOutline,
} from "react-icons/io5";
import {
  PiBowlSteam,
  PiCoatHanger,
  PiCoffee,
  PiCookingPot,
  PiDoor,
  PiFan,
  PiFireExtinguisher,
  PiFlowerTulip,
  PiForkKnife,
  PiHairDryer,
  PiHandshake,
  PiOven,
  PiStairs,
  PiToilet,
  PiToiletPaper,
  PiWashingMachine,
} from "react-icons/pi";
import { RiFridgeLine } from "react-icons/ri";
import { MdBlinds, MdOutlineMicrowave } from "react-icons/md";
import { GiClothesline, GiPillow, GiTable, GiWhisk } from "react-icons/gi";
import { GrToast } from "react-icons/gr";
import { LiaHotTubSolid } from "react-icons/lia";
import { BiBlanket } from "react-icons/bi";

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
          label: "El anfitrión te va a recibir",
          icon: <PiHandshake />,
        },
        {
          label: "Disponible para estadías largas",
          icon: <IoCalendarOutline />,
        },
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
          description: "Los huéspedes pueden cocinar en este espacio",
        },
        {
          label: "Wifi",
          icon: <IoWifiOutline />,
        },
        {
          label: "Estacionamiento gratis en la propiedad",
          icon: <IoCarOutline />,
          description: "Hasta autos de 3 metros de largo",
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
          icon: <PiFlowerTulip />,
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
          icon: <RiFridgeLine />,
        },
        {
          label: "Microondas",
          icon: <MdOutlineMicrowave />,
        },
        {
          label: "Ténder para ropa",
          icon: <GiClothesline />
        },
        {
          label: "Utensilios básicos de cocina",
          description: "Ollas y sartenes, aceite, sal y pimienta",
          icon: <GiWhisk />,
        },
        {
          label: "Vajilla y cubiertos",
          description: "Bols, palitos chinos, platos, tazas, etc.",
          icon: <PiForkKnife />,
        },
        {
          label: "Horno a gas",
          icon: <PiOven />,
        },
        {
          label: "Pava eléctrica",
          icon: <PiBowlSteam />,
        },
        {
          label: "Cafetera: cafetera de filtro",
          icon: <PiCoffee />,
        },
        {
          label: "Tostadora",
          icon: <GrToast />,
        },
        {
          label: "Mesa de comedor",
          icon: <GiTable />,
        },
        {
          label: "Entrada independiente",
          description: "Entrada por otra calle o edificio",
          icon: <PiDoor />,
        },
        {
          label: "Alojamiento de un solo piso",
          description: "Alojamiento sin escaleras",
          icon: <PiStairs />,
        },
      ],
    },
    {
      title: "Baño",
      images: [
        "/imgs/banio-espejo.png",
        "/imgs/estanteria-banio.png",
        "/imgs/banio-vista.png",
      ],
      items: [
        {
          label: "Secador de pelo",
          icon: <PiHairDryer />,
        },
        {
          label: "Bidé",
          icon: <PiToilet />,
        },
        {
          label: "Agua caliente",
          icon: <LiaHotTubSolid />,
        },
        {
          label: "Servicios básicos",
          icon: <PiToiletPaper />,
          description: "Toallas, sábanas, jabón y papel higiénico",
        },
      ],
    },
    {
      title: "Dos habitaciones",
      images: [
        "/imgs/habitacion-cama-matrimonial.png",
        "/imgs/habitacion-dos-camas-alfombra.png",
        "/imgs/habitacion-mueble-puerta.png",
        "/imgs/habitacion-dos-camas-simples.png",
        "/imgs/habitacion-silla-cuadro.png",
      ],
      items: [
        {
          label: "Almohadas y mantas adicionales",
          icon: <GiPillow />,
        },
        {
          label: "Persianas o cortinas blackout",
          icon: <MdBlinds />,
        },
        {
          label: "Perchas",
          icon: <PiCoatHanger />,
        },
        {
          label: "Ropa de cama",
          icon: <BiBlanket />,
          description: "Ropa de cama de algodón",
        },
        {
          label: "AC: Sistema sin conductos tipo split",
          icon: <IoSnowOutline />,
        }, 
        {
          label: "Ventilador de techo",
          icon: <PiFan />,
        },
        
      ],
    },
  ];
  return (
    <section className="w-full px-[7.5vw] flex flex-col gap-4 items-center bg-foreground text-white rounded-3xl py-20 shadow">
      <h3 className="text-4xl xl:text-5xl font-bold">¿Qué ofrecemos?</h3>
      {serviceData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  );
};

export default Services;
