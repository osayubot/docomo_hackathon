"use client";
import ItemCard from "@/components/ItemCard";
import ImageGrid from "@/components/ImageGrid";
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
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import Link from "next/link";

type GachaItem = {
  name: string;
  id: string;
};

const GachaModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false); // 動画再生中かどうか
  const [showItem, setShowItem] = useState<boolean>(false); // アイテム（画像）を表示するかどうか
  const [items, setItems] = useState<{ name: string; id: string }[]>([]); // ガチャアイテム
  const [showImageGrid, setShowImageGrid] = useState<boolean>(true); // 画像グリッドの表示状態

  const handleGacha = () => {
    setShowImageGrid(false); // ガチャボタンを押したら画像グリッドを非表示
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
            <Stack spacing={4} align="center" mb={4}>
              {showImageGrid && <ImageGrid />} {/* 画像グリッドの表示状態に基づいてレンダリング */}

              {!isPlayingVideo && !showItem && (
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                  <Button onClick={handleGacha} bgColor="red" color="white" _hover={{ bgColor: "#D9D9D9" }} p={4}>
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
            </Stack>
          </Container>
        </ModalBody>

        {showItem && (
          <ModalFooter flexDir={"column"} gap={4}>
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
