"use client";
import { Image, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import ReviewItems from "./ReviewItems";
import AboutMe from "./AboutMe";
import ReviewsModal from "./ReviewsModal/ReviewsModal";

const ReviewsCard = () => {
  return (
    <motion.section
      id="reseñas"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      viewport={{ once: false }}
      className="w-full px-[4.5vw] xl:px-[7.5vw] flex flex-col gap-4 items-center bg-white rounded-3xl py-20 shadow"
    >
      <Image
        src="/imgs/puntuacion-airbnb.png"
        alt="puntuacion 5.0"
        className="w-full"
      />
      <h4 className="text-4xl xl:text-5xl font-bold text-center">Favorito entre huéspedes</h4>
      <p className="text-xl xl:text-2xl lg:max-w-[70%] 2xl:max-w-[50%] text-center">
        Este alojamiento está entre el{" "}
        <span className="font-bold">10% de los mejores de todo el mundo</span>{" "}
        en{" "}
        <Link
          href="https://www.airbnb.com/"
          className="text-airbnb text-xl xl:text-2xl font-bold"
        >
          Airbnb
        </Link>{" "}
        , según las calificaciones, las evaluaciones y la fiabilidad.
      </p>
      <ReviewItems />
      <ReviewsModal />
      <AboutMe />
    </motion.section>
  );
};

export default ReviewsCard;
