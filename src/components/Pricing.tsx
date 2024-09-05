"use client";

import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import GachaButton from "./gacha/GachaButton";

interface Props {
  children: React.ReactNode;
}

function PriceWrapper(props: Props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
      width="300px"
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  const prices = [
    {
      name: "お手軽プラン",
      price: "3,000",
      features: [
        "家電1台が家に届く！",
        "交換は2ヶ月に1回まで可能",
        "スタンダード家電ラインナップ",
      ],
    },
    {
      name: "人気プラン",
      price: "5,000",
      appeal: "一番人気",
      features: [
        "家に届く家電の数を2台まで選択可能！",
        "毎月交換可能",
        "スタンダード家電ラインナップ",
      ],
    },
    {
      name: "豪華プラン",
      price: "10,000",
      features: [
        "家に届く家電の数を3台まで選択可能！",
        "毎月交換可能",
        "プレミアム家電ラインナップ",
      ],
    },
  ];
  return (
    <Box pt={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" id="price">
          お好きな価格から始められます
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          お手軽から豪華なプランまで
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {prices.map((p, index) => {
          return (
            <PriceWrapper key={index}>
              <Box position="relative">
                {p.appeal && <AppealText text={p.appeal} />}
                <Box py={4} px={12}>
                  <Text fontWeight="500" fontSize="2xl">
                    {p.name}
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                      ￥
                    </Text>
                    <Text fontSize="5xl" fontWeight="900">
                      {p.price}
                    </Text>
                  </HStack>
                </Box>
                <VStack
                  bg={useColorModeValue("gray.50", "gray.700")}
                  py={4}
                  borderBottomRadius={"xl"}
                >
                  <List spacing={3} textAlign="start" px={12}>
                    {p.features.map((f, index) => {
                      return (
                        <ListItem key={index}>
                          <ListIcon as={CheckCircleIcon} color="green.500" />
                          {f}
                        </ListItem>
                      );
                    })}
                  </List>
                  <Box w="80%" pt={7}>
                    <GachaButton
                      text="ガチャをしてみる"
                      w="full"
                      colorScheme="red"
                    />
                  </Box>
                </VStack>
              </Box>
            </PriceWrapper>
          );
        })}
      </Stack>
    </Box>
  );
}

const AppealText = ({ text }: { text: string }) => {
  return (
    <Box
      position="absolute"
      top="-16px"
      left="50%"
      style={{ transform: "translate(-50%)" }}
    >
      <Text
        textTransform="uppercase"
        bg={useColorModeValue("red.300", "red.700")}
        px={3}
        py={1}
        color={useColorModeValue("gray.900", "gray.300")}
        fontSize="sm"
        fontWeight="600"
        rounded="xl"
      >
        {text}
      </Text>
    </Box>
  );
};
