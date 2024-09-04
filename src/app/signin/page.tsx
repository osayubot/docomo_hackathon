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
  useColorModeValue,
  FormHelperText,
  Center,
} from "@chakra-ui/react";

const Page = () => {
  const { data: session, status } = useSession();
  const [resError, setResError] = useState<Error>();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(validationLoginSchema),
  });

  //セッション判定
  if (session) redirect("/");

  const handleLogin = async (data: any) => {
    const email = data.email;
    const password = data.password;
    const res = await fetch("/api/signIn", {
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
      method: "POST",
    });
    if (res.ok) {
      signIn("credentials", { email: email, password: password });
    } else {
      const resError = await res.json();
      setResError(resError.errors);
    }
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
              <form onSubmit={handleSubmit(handleLogin)}>
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>メールアドレス</FormLabel>
                    <Input
                      type="email"
                      id="email"
                      {...register("email")}
                      placeholder="sample@sample.com"
                    />
                    <FormHelperText>
                      {errors.email?.message as React.ReactNode}
                    </FormHelperText>
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>パスワード</FormLabel>
                    <Input
                      type="password"
                      id="password"
                      {...register("password")}
                      placeholder="********"
                    />
                    <FormHelperText>
                      {errors.password?.message as React.ReactNode}
                    </FormHelperText>
                  </FormControl>
                  <Button type="submit" colorScheme="red">
                    ログイン
                  </Button>
                  <Text colorScheme="red">{resError as React.ReactNode}</Text>
                </Stack>
              </form>
              <Center>
                <Link href="/signup" style={{ textDecoration: "underline" }}>
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
