"use client";
import { Image, Link } from "@nextui-org/react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import SecondaryButton from "../components/SecondaryButton";

const Banner = () => {
  const { scrollY } = useScroll();
  const filter = useTransform(
    scrollY,
    [0, 200],
    ["brightness(0.5)", "brightness(1)"]
  );

  const opacity = useTransform(scrollY, [100, 200], [1, 0]);

  return (
    <section className="w-full relative min-h-[80vh] lg:min-h-screen">
      <motion.div
        style={{ filter }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <Image
          src="/imgs/portada-depto-mendoza.png"
          alt="Portada de Depto Mendoza"
          classNames={{
            wrapper:
              "absolute top-0 left-0 !max-w-full w-full h-full object-cover",
            img: "w-full h-full object-cover",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="flex gap-4 flex-col items-start mx-[4.5vw] xl:mx-[7.5vw] text-white 
        pt-28 md:pt-40 2xl:pt-60 relative z-10 md:max-w-[80%] lg:max-w-[60%] 2xl:max-w-[40%]"
      >
        <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
          Cálido y agradable departamento atendido por su propia dueña
        </h2>
        <h3 className="text-2xl xl:text-3xl font-bold">
          Ubicado en Godoy Cruz, Mendoza. Favorito entre los huéspedes de Airbnb
        </h3>
        <SecondaryButton variant="solid" color="primary" as={Link} href={"#"}>
          Conocer más
        </SecondaryButton>
      </motion.div>
    </section>
  );
};

export default Banner;
