"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface Props {
  children: React.ReactNode;
}

const TestimonialContainer = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  nickname,
  age,
}: {
  src: string;
  nickname: string;
  age: string;
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{nickname}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {age}
        </Text>
      </Stack>
    </Flex>
  );
};

const Testimonial = () => {
  return (
    <Box bg={"gray.100"}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <AnchorLink id="voice">
            <Heading>お客様の声</Heading>
          </AnchorLink>
          <Text my={2}>
            日々、ユーザーの皆様から嬉しいお声をいただいております！
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <TestimonialContainer>
            <TestimonialContent>
              <TestimonialHeading>
                毎月のサプライズが楽しみです！
              </TestimonialHeading>
              <TestimonialText>
                初めて利用した時から毎月何が届くのかワクワクしています。普段は手が出ないプロジェクターや、最新の美顔器を手軽に試せて、生活が一層楽しくなりました。サプライズ感がたまりません！
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgenhQQnD0ONAMHLSSnM7vf3lhnR5sCdjBrZUiJy8rSHEWBN0KjJ1nmOM6esfJVnUAOGnZ1vnN0evWui61qbpZoi7-B0wrpHuAprHo6ueZy5dqRELzuXKkRad1bJ5ggNcGuIIjhVz0qlBI/s800/youngman_25.png"
              }
              nickname={"たなかさん（仮）"}
              age={"20代"}
            />
          </TestimonialContainer>
          <TestimonialContainer>
            <TestimonialContent>
              <TestimonialHeading>
                新しい趣味を発見しました！
              </TestimonialHeading>
              <TestimonialText>
                GoProが届いたとき、正直どう使うか悩みましたが、実際に使ってみると新しい趣味が生まれました。レンタルだからこそ、挑戦する気持ちが高まりました。また次のアイテムが楽しみです。
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2Mw8_TLSo4hWJoT2b_1jsPrvXkiKdNIAL8a44rMNZyzmg1Y0K9wHRpUieraf3Giscqa-mPhq5Lph53ZkaiGtx6Yi2yNxeiIOY1x8xsGwW_1TMxufZe4iVVsJmwgVaCgKA8JkYzGUQ_yU/s170/man_55.png"
              }
              nickname={"さとうさん（仮）"}
              age={"30代"}
            />
          </TestimonialContainer>
          <TestimonialContainer>
            <TestimonialContent>
              <TestimonialHeading>
                手軽さとサプライズ感が最高！
              </TestimonialHeading>
              <TestimonialText>
                面倒な手続きもなく、毎月異なるアイテムが届くのがとても楽しいです。美顔器を使ってみたら、肌の調子が良くなって驚きました。定期的に新しいものに触れるのは刺激的ですね。
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpzsjanHKFPDVsakBxXoRZCbfQ3uE-k4XmxP3KIj-yYX5_li_KBybg3dxStC_tTwNU9xQaviDYhD3dtTI9cPXJ9JSMB-eFw4ydtztSGJxZa_wgifn5hHFdYwylZUIAbClgaNDfOPsZ8dw/s170/woman_72.png"
              }
              nickname={"すずきさん（仮）"}
              age={"40代"}
            />
          </TestimonialContainer>
        </Stack>
      </Container>
    </Box>
  );
};
export default Testimonial;
