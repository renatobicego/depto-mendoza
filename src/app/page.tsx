import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Location from "./sections/Location/Location";
import ReviewsCard from "./sections/Reviews/ReviewsCard";
import Services from "./sections/Services/Services";

export default function Home() {
  return (
    <main className="w-full px-[2vw] xl:px-[2.5vw] flex flex-col gap-14 xl:gap-20 items-center">
      <Banner />
      <h2 id="nosotros" className="text-4xl xl:text-5xl mx-[4.5vw] xl:mx-[7.5vw] leading-tight">
        Olvidate de las preocupaciones en este{" "}
        <span className="font-bold">espacio amplio y sereno.</span> Ubicado en
        un <span className="font-bold">barrio súper tranquilo</span> rodeado de
        árboles añosos.
      </h2>
      <ReviewsCard />
      <Services />
      <Location />
      <Contact />
    </main>
  );
}
