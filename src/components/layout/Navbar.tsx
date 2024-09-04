"use client";
import { Box, Container, Image } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box py={1}>
      <Container maxW={"7xl"} display={"flex"} alignItems={"center"}>
        <HamburgerIcon
          width={10}
          height={10}
          color={"#5C5C5C"}
          onClick={() => setIsOpen(!isOpen)}
        />
        <Link href="/">
          {/*<Image
          src={"/logo.png"}
          alt="kikito 家電ガチャ"
          width={640 / 5}
          height={199 / 5}
          m="4px 10px"
        />*/}
          <Image
            src={"/logo2.png"}
            alt="kikito 家電ガチャ"
            width={960 / 5}
            height={230 / 5}
            m="4px 10px"
          />
        </Link>
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </Container>
    </Box>
  );
};
export default Navbar;
