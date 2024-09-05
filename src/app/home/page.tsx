"use client";
import {
  Box,
  Container,
  Image,
  Text,
  CardBody,
  CardFooter,
  Card,
  Button,
  Heading,
  Stack,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import Link from "next/link";

const Page = () => {
  return (
    <Container padding={8}>
      <Box textAlign={"center"} fontSize={"x-large"} fontWeight={"bold"}>
        今月あなたに届く商品はこちらです！！
      </Box>
      <Card marginTop={6}>
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">
              Sony ワイヤレスノイズキャンセリングステレオヘッドセット WF-1000XM5
            </Heading>
            <Text>
              ここにLLMのおすすめする理由を載せられるとよさそうここにLLMのおすすめする理由を載せられるとよさそうここにLLMのおすすめする理由を載せられるとよさそうここにLLMのおすすめする理由を載せられるとよさそうここにLLMのおすすめする理由を載せられるとよさそう
            </Text>
            <Text color="blue.600" fontSize="2xl">
              # おすすめの商品
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            as={Link}
            width={"100%"}
            href={"https://rental.kikito.docomo.ne.jp/rental/devices/SO004400/"}
          >
            詳細を見る
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
};
export default Page;
