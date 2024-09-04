"use client";
import ItemCard from "@/components/ItemCard";
import {
  Container,
  Button,
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { useState } from "react";

type GachaItem = {
  name: string;
  id: string;
};

const GachaModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [items, setItems] = useState<GachaItem[]>([]);
  const handleGacha = () => {
    // この中でガチャの処理
    const sampleItems = [{ name: "hogehoge", id: "hogehoge" }];
    setItems(sampleItems);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
      <ModalOverlay />
      <ModalContent maxW={"2xl"}>
        <ModalHeader>お試しガチャ</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container bgColor={"#D9D9D9"} p={4} borderRadius={"20px"}>
            <Center>
              <Button mx="auto" onClick={handleGacha}>
                ガチャをする
              </Button>
            </Center>
          </Container>
          {items.map((item) => {
            return <ItemCard key={item.id} name={item.name} />;
          })}
        </ModalBody>

        {items.length > 0 && (
          <ModalFooter flexDir={"column"}>
            <Button colorScheme="blue" w={"full"} onClick={() => setItems([])}>
              もう一度
            </Button>
            <Button w={"full"}>サブスクする</Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};
export default GachaModal;
