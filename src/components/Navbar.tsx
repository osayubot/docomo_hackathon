"use client";
import { Container, Image } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container display={"flex"}>
      <HamburgerIcon
        width={12}
        height={12}
        color={"#88AFBE"}
        onClick={() => setIsOpen(!isOpen)}
      />
      <Link href="/">
        <Image
          src={"/logo.png"}
          alt="kikito 家電ガチャ"
          width={640 / 5}
          height={199 / 5}
          m="4px 10px"
        />
      </Link>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Container>
  );
};
export default Navbar;
