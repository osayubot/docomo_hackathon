"use client";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Sidebar = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  const pathname = usePathname();
  useEffect(() => {
    onClose();
  }, [pathname]);
  return (
    <Drawer onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">メニュー</DrawerHeader>
        <DrawerBody>
          <Text my={1}>
            <Link href="https://www.docomo.ne.jp/service/kikito/">kikitoって何？</Link>
          </Text>
          <Text my={1}>
            <Link href="https://rental.kikito.docomo.ne.jp/rental/devices/NR000291/">一押し商品</Link>
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default Sidebar;