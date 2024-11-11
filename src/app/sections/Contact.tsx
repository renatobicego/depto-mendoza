"use client"
import { Button, Image, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaAirbnb } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";

const Contact = () => {
  const socialMedia = [
    {
      url: "https://www.airbnb.com.ar/rooms/1074717187334770899",
      icon: <FaAirbnb className="size-14 md:size-16 text-airbnb" />,
      label: "airbnb",
    },
    {
      icon: <TbBrandBooking className="size-[66px] md:size-[74px] text-booking" />,
      url: "https://www.booking.com/Share-1uleo6",
      label: "booking",
    },
    {
      icon: (
        <Image
          src="/instagramIcon.png"
          className="size-12 md:size-14"
          removeWrapper
          alt="instagram"
        />
      ),
      url: "https://www.instagram.com/deptomendozaa/",
      label: "instagram",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      viewport={{ once: false }}
      id="contacto"
      className="w-full bg-primary rounded-3xl text-4xl py-8 xl:text-5xl 
      flex gap-6 md:gap-12 items-center flex-col md:flex-row px-[4.5vw] xl:px-[7.5vw]"
    >
      <h3 className="text-white text-4xl xl:text-5xl  font-bold">
        Redes y contacto
      </h3>
      <nav>
        <ul className="flex items-center gap-4">
          {socialMedia.map((item) => (
            <li key={item.label}>
              <Button
                className="w-20 h-20 md:w-24 md:h-24 bg-white"
                radius="full"
                isIconOnly
                as={Link}
                target="_blank"
                href={item.url}
              >
                {item.icon}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.section>
  );
};

export default Contact;
