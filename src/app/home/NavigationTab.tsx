"use client";
import { Tab, TabList, Tabs } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationTab = () => {
  const pathname = usePathname();

  const tabIndex =
    pathname === "/home"
      ? 0
      : pathname === "/home/history"
      ? 1
      : pathname === "/home/settings"
      ? 2
      : -1;

  return (
    <Tabs isFitted defaultIndex={tabIndex}>
      <TabList mb="1em">
        <Tab cursor={"pointer"} as={Link} href="/home">
          今月の商品
        </Tab>
        <Tab cursor={"pointer"} as={Link} href="/home/history">
          過去の商品
        </Tab>
        <Tab cursor={"pointer"} as={Link} href="/home/settings">
          個人情報設定
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default NavigationTab;
