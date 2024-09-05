"use client";

import Form from "@/app/home/settings/Form";
import { Container, Heading, Box, Stack, Center, Button, Flex } from "@chakra-ui/react";

const Page = () => {
  return (
    <Flex minH={"100vh"} justify={"center"} bg={"gray.50"}>
      <Stack spacing={8} py={12} px={6} width={"100%"} maxW={"md"}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>新規登録</Heading>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8} minW={360}>
          <Form />
        </Box>
      </Stack>
    </Flex>
  );
};
export default Page;