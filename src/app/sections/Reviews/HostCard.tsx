import { Divider, Image } from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";
const HostCard = () => {
  return (
    <div className="flex px-6 py-4 gap-12">
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/imgs/foto-anfitriona.webp"
          alt="Foto de anfitriona"
          classNames={{
            wrapper: "rounded-full overflow-hidden",
            img: "w-44 h-44 object-cover rounded-full",
          }}
        />
        <h6 className="text-2xl font-bold">Marcela</h6>
        <p>Anfitriona</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-1 flex-col items-start">
          <p className="text-xl font-bold">5</p>
          <p>Evaluaciones</p>
          <Divider />
        </div>
        <div className="flex gap-1 flex-col items-start">
          <div className="flex gap-1 items-center">
            <p className="text-xl font-bold">5</p>
            <FaStar className="text-primary" />
          </div>
          <p>Calificación</p>
          <Divider />
        </div>
        <div className="flex gap-1 flex-col items-start">
          <p className="text-xl font-bold">9</p>
          <p>
            Meses como <br /> anfitriona
          </p>
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default HostCard;
