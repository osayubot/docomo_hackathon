"use client";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationLoginSchema } from "@/libs/validationSchema";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  FormHelperText,
  Center,
} from "@chakra-ui/react";

const Page = () => {
  const { data: session, status } = useSession();

  // react-hook-formなんか使えないし時間ないので直書きで...
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  //セッション判定
  if (session) redirect("/home");

  const onSubmit = async () => {
    // const res = await fetch("/api/auth/sigin", {
    //   body: JSON.stringify(data),
    //   headers: { "Content-type": "application/json" },
    //   method: "POST",
    // });
    // if (res.ok) {
    const res = await signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: "/home",
    });
    // if (res?.ok) {
    //   // redirect("/home");
    // } else {
    //   setError("ログインに失敗しました");
    // }
    // } else {
    //   const resError = await res.json();
    //   setError(resError.errors);
    // }
  };
  return (
    <>
      <Flex minH={"100vh"} justify={"center"} bg={"gray.50"}>
        <Stack spacing={8} py={12} px={6} width={"100%"} maxW={"md"}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>ログイン</Heading>
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
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                  />
                </FormControl>
                <Button colorScheme="red" onClick={onSubmit}>
                  ログイン
                </Button>
                <Text colorScheme="red">{error}</Text>
              </Stack>
              <Center>
                <Link
                  href="/auth/signup"
                  style={{ textDecoration: "underline" }}
                >
                  新規登録はこちら
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
