"use client";
import CustomCard from "@/components/CustomCard";
import Navbar from "@/components/Navbar";
import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  Input,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <CustomCard
        title="毎月のサプライズで、生活に新たな発見を。"
        description="何が届くかわからない楽しみを、生活にプラス。プロジェクターから美顔器まで、多彩なアイテムであなたのライフスタイルをアップデート。"
      />
      <CustomCard
        title="生活に驚きを。新しい趣味を発見できる家具レンタル。"
        description="普段は手が出ないアイテムも、今なら気軽にレンタルして体験。あなたの暮らしに刺激と快適さをプラス！"
      />

      <Container bgColor={"#D9D9D9"} p={4} borderRadius={"20px"}>
        <FormControl>
          <FormLabel>性別</FormLabel>
          <Input type="email" />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>年齢</FormLabel>
          <Input type="email" />
          <FormHelperText></FormHelperText>
        </FormControl>
        <Center>
          <Button mx="auto">ガチャをする</Button>
        </Center>
      </Container>
    </Container>
  );
};
export default Page;
