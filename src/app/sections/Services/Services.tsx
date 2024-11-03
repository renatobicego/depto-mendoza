"use client";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

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
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      viewport={{ once: false }}
      className="w-full px-[7.5vw] flex flex-col gap-4 items-center bg-foreground text-white rounded-3xl py-20 shadow"
    >
      <h3 className="text-5xl font-bold">¿Qué ofrecemos?</h3>
      {serviceData.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </motion.section>
  );
};

export default Services;
