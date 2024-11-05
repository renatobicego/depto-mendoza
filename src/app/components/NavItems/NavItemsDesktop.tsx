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
  return (
    <NavbarContent justify="end" className="gap-3">
      <NavbarItem className={`max-sm:hidden`}>
        <SecondaryButton
          variant="bordered"
          className="border-white"
          as={Link}
          href={"#nosotros"}
        >
          Conocenos
        </SecondaryButton>
      </NavbarItem>
      <NavbarItem className={`max-sm:hidden`}>
        <SecondaryButton
          variant="bordered"
          className="border-white"
          as={Link}
          href={"#servicios"}
        >
          ¿Qué ofrecemos?
        </SecondaryButton>
      </NavbarItem>
      <NavbarItem className={`max-sm:hidden`}>
        <SecondaryButton
          variant="bordered"
          className="border-white"
          as={Link}
          href={"#ubicacion"}
        >
          Ubicación
        </SecondaryButton>
      </NavbarItem>
      <NavbarItem className={`max-sm:hidden`}>
        <SecondaryButton
          className="text-airbnb border-airbnb p-0.5"
          isIconOnly
          as={Link}
          href={"#"}
        >
          <FaAirbnb className="size-6" />
        </SecondaryButton>
      </NavbarItem>
      <NavbarItem className={`max-sm:hidden`}>
        <SecondaryButton
          className="text-booking border-booking p-0.5"
          isIconOnly
          as={Link}
          href={"#"}
        >
          <TbBrandBooking className="size-6" />
        </SecondaryButton>
      </NavbarItem>
      <NavbarItem className={`max-sm:hidden`}>
        <SecondaryButton
          variant="solid"
          color="primary"
          as={Link}
          href={"#contacto"}
        >
          Contacto
        </SecondaryButton>
      </NavbarItem>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
    </NavbarContent>
  );
};

export default NavItemsDesktop;
