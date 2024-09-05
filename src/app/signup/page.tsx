"use client";

import Form from "@/app/home/settings/Form";
import { Container, Flex, Heading, Stack} from "@chakra-ui/react";

const Page = () => {
  return (
    <Flex minH={"100vh"} justify={"center"} bg={"gray.50"}>
      <Stack spacing={8} py={12} px={6} width={"100%"} >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>新規登録</Heading>
        </Stack>
        <Container>
        <Form />
        </Container>
      </Stack>
    </Flex>
  )
  ;
};
export default Page;

