import AboutMeItems from "./AboutMeItems";
import HostCard from "./HostCard";

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col flex-gap items-start gap-4 mt-8">
      <h6 className="text-2xl font-bold">Conoce a tu anfitriona</h6>
      <div className="flex gap-12 items-start max-md:flex-wrap ">
        <HostCard />
        <AboutMeItems />
      </div>
    </div>
  );
};

export default AboutMe;
