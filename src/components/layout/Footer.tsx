"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false); // マウントされたかどうかを追跡
  const [isHomePage, setIsHomePage] = useState(false); // ホームページかどうかの状態を保持

  useEffect(() => {
    setIsMounted(true); // クライアントサイドでのみマウント

    if (typeof window !== "undefined") {
      const { pathname } = window.location; // ここでURLのパスを取得
      setIsHomePage(pathname === "/"); // ホームページかどうかを判定
    }
  }, []);

  // クライアントサイドでのみ実行されるように制御
  if (!isMounted) {
    return null; // サーバーサイドでは何もレンダリングしない
  }

  return (
    <Box
      bg={"gray.50"}
      color={"gray.700"}
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
                m="-8px 10px"
              />
            </Link>
            <Text fontSize={"sm"} px={4} fontWeight={"bold"}>
              © NTT DOCOMO Hackathon 2024
            </Text>
          </Stack>

          {isHomePage && (
            <Stack align={"flex-start"}>
              <Heading size={"md"}>サービス概要</Heading>
              <Box as={AnchorLink} href={"#price"}>
                料金
              </Box>
              <Box as={AnchorLink} href={"#voice"}>
                お客様からの声
              </Box>
            </Stack>
          )}

          <Stack align={"flex-start"}>
            <Heading size={"md"}>ご利用ガイド</Heading>
            <Box
              as="a"
              href={"https://rental.kikito.docomo.ne.jp/portal/terms-of-use/"}
            >
              利用規約
            </Box>
            <Box as="a" href={"https://www.docomo.ne.jp/utility/privacy/"}>
              プライバシーポリシー
            </Box>
            <Box
              as="a"
              href={
                "https://rental.kikito.docomo.ne.jp/portal/commercial-transactions/"
              }
            >
              特定商取引法に基づく表記
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
