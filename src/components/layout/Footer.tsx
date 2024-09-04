"use client";

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={10}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Link href="/">
              <Image
                src={"/logo2.png"}
                alt="kikito 家電ガチャ"
                width={960 / 4}
                height={230 / 4}
                m="4px 10px"
              />
            </Link>
            <Text fontSize={"sm"} px={4} fontWeight={"bold"}>
              © NTT DOCOMO Hackathon 2024
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>サービス概要</ListHeader>
            <Box as="a" href={"#"}>
              料金
            </Box>
            <Box as="a" href={"#"}>
              お客様からの声
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>ご利用ガイド</ListHeader>
            <Box as="a" href={"#"}>
              利用規約
            </Box>
            <Box as="a" href={"#"}>
              プライバシーポリシー
            </Box>
            <Box as="a" href={"#"}>
              特定商取引法に基づく表記
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
