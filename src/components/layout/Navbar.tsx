"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  return (
    <>
      <Box py={1}>
        <Container
          justifyContent={"space-between"}
          maxW={"7xl"}
          display={"flex"}
          alignItems={"center"}
        >
          <Flex alignItems={"center"}>
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
          </Flex>
          <Flex align={"center"}>
            {status === "unauthenticated" ? (
              <Button as={Link} href="/signup">
                新規登録
              </Button>
            ) : "loading" ? (
              <Skeleton
                variant="text"
                animation="wave"
                width={175}
                height={25}
              />
            ) : (
              <Flex>
                <Avatar src="/girl.png" />
                <Text>{session?.user?.name}</Text>
              </Flex>
            )}
          </Flex>
        </Container>
      </Box>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
export default Navbar;
