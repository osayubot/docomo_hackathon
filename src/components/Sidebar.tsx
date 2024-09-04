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

const Sidebar = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">メニュー</DrawerHeader>
        <DrawerBody>
          <Text my={1}>
            <Link href="/about">kikitoの家電ガチャって何？</Link>
          </Text>
          <Text my={1}>
            <Link href="/home">ホーム</Link>
          </Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default Sidebar;
