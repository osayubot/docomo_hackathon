import { Tab, TabList, Tabs, Link } from "@chakra-ui/react";

const NavigationBar = ({ pathname }: { pathname: string }) => {
  const defaultIndex = () => {
    if (pathname === "/") {
      return 0;
    } else if (pathname === "/history") {
      return 1;
    } else if (pathname === "/settings") {
      return 2;
    } else {
      return 0;
    }
  };

  return (
    <Tabs isFitted variant="enclosed" defaultIndex={defaultIndex()}>
      <TabList mb="1em">
        <Tab cursor={"pointer"}>
          <Link href="/" display={"block"} width={"100%"} height={"100%"}>
            今月の商品
          </Link>
        </Tab>
        <Tab cursor={"pointer"}>
          <Link
            href="/history"
            display={"block"}
            width={"100%"}
            height={"100%"}
          >
            過去の商品
          </Link>
        </Tab>
        <Tab cursor={"pointer"}>
          <Link
            href="/settings"
            display={"block"}
            width={"100%"}
            height={"100%"}
          >
            個人情報設定
          </Link>
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default NavigationBar;
