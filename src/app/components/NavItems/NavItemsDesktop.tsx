import {
  Link,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import SecondaryButton from "../SecondaryButton";
import { FaAirbnb } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";

const NavItemsDesktop = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center", // Aligns the element to the middle
      });
      window.history.pushState({}, "", `#${id}`);
    }
  };
  return (
    <NavbarContent justify="end" className="gap-3">
      <NavbarItem className={`max-lg:hidden`}>
        <SecondaryButton
          variant="bordered"
          className="border-white"
          as={Link}
          href={"#nosotros"}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("nosotros");
          }}
        >
          Conocenos
        </SecondaryButton>
      </NavbarItem>
      <NavbarItem className={`max-lg:hidden`}>
        <SecondaryButton
          variant="bordered"
          className="border-white"
          as={Link}
          href={"#servicios"}
        >
          ¿Qué ofrecemos?
        </SecondaryButton>
      </NavbarItem>
      <NavbarItem className={`max-lg:hidden`}>
        <SecondaryButton
          variant="bordered"
          className="border-white"
          as={Link}
          href={"#ubicacion"}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("ubicacion");
          }}
        >
          Ubicación
        </SecondaryButton>
      </NavbarItem>
      <NavbarItem className={`max-lg:hidden`}>
        <SecondaryButton
          className="text-airbnb border-airbnb p-0.5"
          isIconOnly
          as={Link}
          target="_blank"
          href={"https://www.airbnb.com.ar/rooms/1074717187334770899"}
        >
          <FaAirbnb className="size-6" />
        </SecondaryButton>
      </NavbarItem>
      <NavbarItem className={`max-lg:hidden`}>
        <SecondaryButton
          className="text-booking border-booking p-0.5"
          isIconOnly
          as={Link}
          target="_blank"
          href={"https://www.booking.com/Share-1uleo6"}
        >
          <TbBrandBooking className="size-6" />
        </SecondaryButton>
      </NavbarItem>
      <NavbarItem className={`max-lg:hidden`}>
        <SecondaryButton
          variant="solid"
          color="primary"
          as={Link}
          href={"#contacto"}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contacto");
          }}
        >
          Contacto
        </SecondaryButton>
      </NavbarItem>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden"
      />
    </NavbarContent>
  );
};

export default NavItemsDesktop;
