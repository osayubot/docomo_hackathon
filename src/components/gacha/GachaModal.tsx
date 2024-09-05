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
} from "@chakra-ui/react";
import { useState } from "react";

type GachaItem = {
  name: string;
  id: string;
};

// const GachaModal = ({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) => {
//   const [items, setItems] = useState<GachaItem[]>([]);
//   const handleGacha = () => {
//     // この中でガチャの処理
//     const sampleItems = [{ name: "hogehoge", id: "hogehoge" }];
//     setItems(sampleItems);
//   };

const GachaModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false); // 動画再生中かどうか
  const [showItem, setShowItem] = useState<boolean>(false); // アイテム（画像）を表示するかどうか
  const [items, setItems] = useState<{ name: string; id: string }[]>([]); // ガチャアイテム

  const handleGacha = () => {
    setIsPlayingVideo(true); // 動画を再生開始
    setShowItem(false); // アイテムを非表示にして動画再生
    setTimeout(() => {
      setIsPlayingVideo(false); // 動画が終了したとみなす
      const sampleItems = [{ name: "hogehoge", id: "hogehoge" }]; // ガチャ結果
      setItems(sampleItems);
      setShowItem(true); // アイテムを表示
    }, 20000); // 20秒後に画像を表示
  };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
//       <ModalOverlay />
//       <ModalContent maxW={"2xl"}>
//         <ModalHeader>お試しガチャ</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <Container bgColor={"#D9D9D9"} p={4} borderRadius={"20px"}>
//             <Center>
//               <Button mx="auto" onClick={handleGacha}>
//                 ガチャをする
//               </Button>
//             </Center>
//           </Container>
//           {items.map((item) => {
//             return <ItemCard key={item.id} name={item.name} />;
//           })}
//         </ModalBody>

//         {items.length > 0 && (
//           <ModalFooter flexDir={"column"}>
//             <Button colorScheme="blue" w={"full"} onClick={() => setItems([])}>
//               もう一度
//             </Button>
//             <Button w={"full"}>サブスクする</Button>
//           </ModalFooter>
//         )}
//       </ModalContent>
//     </Modal>
//   );
// };
// export default GachaModal;



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
              <Button mx="auto" onClick={handleGacha}>
                ガチャをする
              </Button>
            )}

            {isPlayingVideo && (
              <Box>
                {/* 動画の再生エリア */}
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