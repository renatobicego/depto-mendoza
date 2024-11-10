"use client";
import { Navbar } from "@nextui-org/react";
import { useState } from "react";
import Logo from "./NavItems/Logo";
import NavItemsDesktop from "./NavItems/NavItemsDesktop";
import MobileMenu from "./NavItems/MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen)
  return (
    <Navbar
      classNames={{
        wrapper: "max-w-full mx-[2vw] px-[4vw] xl:mx-[7.5vw] xl:px-[2.5vw] backdrop-blur-lg mt-4 rounded-3xl bg-[#FAFAF998]",
        base: "bg-transparent"
      }}
      isBlurred={false}
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
    >
      <Logo />
      <NavItemsDesktop isMenuOpen={isMenuOpen} />
      <MobileMenu closeMenu={() => setIsMenuOpen(false)}/>
    </Navbar>
  );
}
