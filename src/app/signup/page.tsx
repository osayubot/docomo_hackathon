"use client";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

interface Error {
  email: [];
  password: [];
  passwordConfirm: [];
}

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // react-hook-formなんか使えないし時間ないので直書きで...
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  //セッション判定
  if (session) redirect("/");

  //登録処理
  const onSubmit = async () => {
    const res = await fetch("/api/signUp", {
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
      method: "POST",
    });
    if (res.ok) {
      signIn("credentials", { email: email, password: password });
      router.push("/home");
    } else {
      const resError = await res.json();
      setError(resError.errors);
    }
  };
  return (
    <>
      <Flex minH={"100vh"} justify={"center"} bg={"gray.50"}>
        <Stack spacing={8} py={12} px={6} width={"100%"} maxW={"md"}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>新規登録</Heading>
          </Stack>
          <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8} minW={360}>
            <Stack spacing={4}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>メールアドレス</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sample@sample.com"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>パスワード</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                  />
                </FormControl>
                <Button colorScheme="blue" onClick={onSubmit}>
                  登録
                </Button>
                <Text>{error}</Text>
              </Stack>
              <Center>
                <Link href="/signin" style={{ textDecoration: "underline" }}>
                  ログインはこちら
                </Link>
              </Center>
            </Stack>
          </Box>
          {/*<Button colorScheme="blue" onClick={() => signIn("google")}>
            Googleでログイン
          </Button>*/}
        </Stack>
      </Flex>
    </>
  );
};

export default Page;
