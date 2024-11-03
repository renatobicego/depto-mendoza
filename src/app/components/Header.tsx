"use client";
import { Navbar } from "@nextui-org/react";
import { useState } from "react";
import Logo from "./NavItems/Logo";
import NavItemsDesktop from "./NavItems/NavItemsDesktop";
import MobileMenu from "./NavItems/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      classNames={{
        wrapper: "max-w-full mx-[7.5vw] px-11 backdrop-blur-xl mt-4 rounded-3xl bg-[#FAFAF995]",
        base: "bg-transparent"
      }}
      isBlurred={false}
      onMenuOpenChange={setIsMenuOpen}
    >
      <Logo />
      <NavItemsDesktop isMenuOpen={isMenuOpen} />
      <MobileMenu />
    </Navbar>
  );
}
