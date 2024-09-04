"use client";
import { Box, Container, Image } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Box mt={10} bgColor={"#CADCE0"}>
      <Container maxW={"none"} display={"flex"}>
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="kikito 家電ガチャ"
            width={640 / 5}
            height={199 / 5}
            m="4px 10px"
          />
        </Link>
      </Container>
    </Box>
  );
};
export default Footer;
