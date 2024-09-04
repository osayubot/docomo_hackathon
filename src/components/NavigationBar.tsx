"use client";
import { Tab, TabList, Tabs } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
const NavigationBar = () => {
  const pathname = usePathname();

  const getTabIndex = useCallback(() => {}, []);

  useEffect(() => {
    const newTabIndex =
      pathname === "/detail/order"
        ? 0
        : pathname === "/detail/history"
        ? 1
        : pathname === "/detail/settings"
        ? 2
        : -1;

    setTabIndex(newTabIndex);
  }, [pathname]);

  const [tabIndex, setTabIndex] = useState<number>(-1);

  return (
    <Tabs isFitted variant="enclosed" defaultIndex={tabIndex}>
      <TabList mb="1em">
        <Tab cursor={"pointer"} as={Link} href="/detail/order">
          今月の商品
        </Tab>
        <Tab cursor={"pointer"} as={Link} href="/detail/history">
          過去の商品
        </Tab>
        <Tab cursor={"pointer"} as={Link} href="/detail/settings">
          <Link href="/detail/settings">個人情報設定</Link>
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default NavigationBar;
