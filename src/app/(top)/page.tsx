import Hero from "@/components/Hero";
import ImageGrid from "@/components/ImageGrid";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonials";
import { Box, Text, VStack, Heading } from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";

// Prisma Clientを初期化
const prisma = new PrismaClient();

// Itemsを取得する非同期関数
const getItems = async () => {
  const items = await prisma.items.findMany(); // Itemsテーブルからデータを取得
  return items;
};

const Page = async () => {
  const items = await getItems(); // Itemsデータを取得

  return (
    <Box>
      <Hero />
      <Testimonial />
      <Pricing />

      {/* Itemsの羅列表示 */}
      <Box my={10}>
        <Heading as="h2" size="lg" mb={4}>
          商品リスト
        </Heading>
        <VStack spacing={4}>
          {items.map((item) => (
            <Box
              key={item.id}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="lg"
              width="100%"
            >
              <Heading as="h3" size="md">
                {item.name}
              </Heading>
              <Text>カテゴリ: {item.category}</Text>
              <Text>価格: {item.monthlyPrice.toString()}円</Text>
              <Text>概要: {item.overview}</Text>
            </Box>
          ))}
        </VStack>
      </Box>

      <ImageGrid />
      <Box height={10} />
    </Box>
  );
};

export default Page;