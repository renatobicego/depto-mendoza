import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import CustomMap from "./CustomMap";

const Location = () => {
  return (
    <section
      id="ubicacion"
      className="w-full px-[4.5vw] xl:px-[7.5vw] flex gap-4 items-start flex-col"
    >
      <h4 className="text-2xl xl:text-3xl font-semibold">
        ¿Dónde está ubicado?
      </h4>
      <p className="text-lg xl:text-xl lg:max-w-[70%] xl:max-w-[50%]">
        Sobre la esquina de Hilario Cuadros y Perito Moreno, en el barrio
        Gobernador Benegas. Cercanía con el parque San Vicente y el centro
        comercial Palmares. A 15 minutos en auto del centro de la ciudad de
        Mendoza.
      </p>
      <div className="w-full flex gap-2 max-lg:flex-wrap">
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[75vh]">
          <CustomMap />
        </div>
        <Card className="h-full w-full md:flex-1">
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full object-cover"
            src="/imgs/barrio-godoy-cruz.png"
          />
          <CardFooter className="absolute bg-[#332F2F75] bottom-0 z-10 justify-between">
            <p className="text-white text-lg xl:text-xl  py-2 px-4 rounded-lg w-full">
              Calle Perito Moreno
            </p>
          </CardFooter>
        </Card>
        <Card className="h-full w-full md:flex-1">
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full object-cover"
            src="/imgs/parque-san-vicente.png"
          />
          <CardFooter className="absolute bg-[#332F2F75] bottom-0 z-10 justify-between">
            <p className="text-white text-lg xl:text-xl py-2 px-4 rounded-lg w-full">
              Parque San Vicente
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Location;
