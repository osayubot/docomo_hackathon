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
  Box,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

type GachaItem = {
  name: string;
  id: string;
};

const bounceAnimation = `
  @keyframes bounce {
    0% {
    transform: translateY(0) scaleY(1);
  }
  50% {
    transform: translateY(-10px) scaleY(1.1);
  }
  100% {
    transform: translateY(0) scaleY(1);
  }
  }
`;

const GachaModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false); // 動画再生中かどうか
  const [showItem, setShowItem] = useState<boolean>(false); // アイテム（画像）を表示するかどうか
  const [items, setItems] = useState<{ name: string; id: string }[]>([]); // ガチャアイテム

  const handleGacha = () => {
    setIsPlayingVideo(true);
    setShowItem(false); 
    setTimeout(() => {
      setIsPlayingVideo(false);
      const sampleItems = [{ name: "hogehoge", id: "hogehoge" }]; // ガチャ結果
      setItems(sampleItems);
      setShowItem(true);
    }, 20000);
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
              {!isPlayingVideo && !showItem && (
                <Box display="flex" flexDirection="column" alignItems="center" minHeight="300px" justifyContent="center">
                  <style>
                    {bounceAnimation}
                  </style>
                  <Image
                    src="/gacha.png"
                    alt="Gacha"
                    boxSize="200px"
                    objectFit="contain"
                    mb={5}
                    animation="bounce 2s infinite"
                  />
                  <Button mx="auto" onClick={handleGacha} bgColor="red" color="white" _hover={{ bgColor: "#D9D9D9" }}>
                    ガチャをする
                  </Button>
                </Box>
              )}

              {isPlayingVideo && (
                <Box>
                  <video width="100%" autoPlay muted>
                    <source src="/kikito.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </Box>
              )}

              {showItem && items.map((item) => <ItemCard key={item.id} name={item.name} />)}
            </Center>
          </Container>
        </ModalBody>

        {showItem && (
          <ModalFooter flexDir={"column"}>
            <Button colorScheme="blue" w={"full"} onClick={handleGacha}>
              もう一度
            </Button>
            <Button w={"full"} as={Link} href="/signup">サブスクする</Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default GachaModal;
