import { Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { FaAirbnb } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import SecondaryButton from "../SecondaryButton";

const MobileMenu = ({closeMenu} : {closeMenu: () => void} ) => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center", // Aligns the element to the middle
      });
      window.history.pushState({}, "", `#${id}`);
      closeMenu();
    }
  };
  return (
    <NavbarMenu className="pt-10">
      <NavbarMenuItem>
        <Link
          href={"#nosotros"}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("nosotros");
          }}
        >
          Conocenos
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link
          href={"#servicios"}
          onClick={(e) => {
            closeMenu();
          }}
        >
          ¿Qué ofrecemos?
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link
          href={"#ubicacion"}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("ubicacion");
          }}
        >
          Ubicación
        </Link>
      </NavbarMenuItem>

      <NavbarMenuItem className="flex gap-2 items-center">
        <SecondaryButton
          className="text-airbnb border-airbnb p-0.5"
          isIconOnly
          as={Link}
          target="_blank"
          href={"https://www.airbnb.com.ar/rooms/1074717187334770899"}
        >
          <FaAirbnb className="size-6" />
        </SecondaryButton>
        <SecondaryButton
          className="text-booking border-booking p-0.5"
          isIconOnly
          as={Link}
          target="_blank"
          href={"https://www.booking.com/Share-1uleo6"}
        >
          <TbBrandBooking className="size-6" />
        </SecondaryButton>
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
      </NavbarMenuItem>
    </NavbarMenu>
  );
};

export default MobileMenu;
