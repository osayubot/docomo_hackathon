"use client";
import CustomCard from "@/components/CustomCard";
import ItemCard from "@/components/ItemCard";
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
  RadioGroup,
  HStack,
  Radio,
} from "@chakra-ui/react";
import { useState } from "react";

type GachaItem = {
  name: string;
  id: string;
};

const Page = () => {
  const [items, setItems] = useState<GachaItem[]>([]);
  const handleGacha = () => {
    // この中でガチャの処理
    const sampleItems = [{ name: "hogehoge", id: "hogehoge" }];
    setItems(sampleItems);
  };
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
        <Center>
          <Button mx="auto" onClick={handleGacha}>
            ガチャをする
          </Button>
        </Center>
      </Container>
      {items.map((item) => {
        return <ItemCard key={item.id} name={item.name} />;
      })}
    </Container>
  );
};
export default Page;
