"use client";
import NavigationBar from "@/components/NavigationBar";
import { Box, Button, Card, Center, Skeleton, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

const Page = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <Card>
        <div className="m-2">ログイン中のユーザー</div>
        {status === "loading" ? (
          <Skeleton variant="text" animation="wave" width={175} height={25} />
        ) : (
          <Text className="font-bold">{session?.user?.email}</Text>
        )}
      </Card>
      <Button onClick={() => signOut()}>サインアウトする</Button>
      <NavigationBar />
    </>
  );
};
export default Page;
