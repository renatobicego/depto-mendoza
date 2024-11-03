"use client";

import SecondaryButton from "@/app/components/SecondaryButton";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const ReviewsModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const reviews = [
    {
      name: "Florencia",
      date: "abril de 2024",
      text: "Excelente lugar! El departamento precioso. Marcela nos recibio muy bien. Siempre dispuesta a solucionar inconveniente nuestros!",
    },
    {
      name: "Maca",
      date: "marzo de 2024",
      text: "100% recomendable, reserve para que mis padres tuvieran una semana de descanso y fue maravilloso! El departamento aún más lindo que en las fotos, bellamente decorado, con todas las comodidades. Marcela siempre disponible y atenta a cualquier necesidad. Fue como estar en casa. Sin duda volveremos",
    },
    {
      name: "Diego",
      date: "febrero de 2024",
      text: "la anfitriona era muy agradable y el sector muy tranquilo. tremendamente recomendable!",
    },
    {
      name: "Manuel",
      date: "febrero de 2024",
      text: "Departamento cómodo y acogedor contaba con lo necesario para descansar tranquilo en vacaciones ,contaba con su propio estacionamiento privado barrio muy tranquilo para caminar en familia ,Marcela y su marido muy amable y atentos a cualquier duda sin duda lo recomendaría gody Cruz es una muy buen lugar para quedarse .",
    },
    {
      name: "Dora",
      date: "febrero de 2024",
      text: "Excelente servicio, los anfitriones Marcela y su esposo Pablo un 10. Hermoso y agradable lugar, esperamos regresar pronto!",
    },
  ];

  return (
    <>
      <SecondaryButton variant="solid" color="primary" onPress={onOpen}>
        Ver reseñas
      </SecondaryButton>
      <Modal
        scrollBehavior="inside"
        placement="center"
        isOpen={isOpen}
        size="xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-2xl">
            Reseñas
          </ModalHeader>
          <ModalBody>
            {reviews.map((review, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <div className="flex gap-1 flex-col items-start">
                  <p className="text-xl font-bold">{review.name}</p>
                  <p className="text-sm">{review.date}</p>
                </div>
                <p>{review.text}</p>
              </div>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReviewsModal;
