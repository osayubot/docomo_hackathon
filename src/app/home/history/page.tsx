"use client";
import {
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  RadioGroup,
  Radio,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

type DataType = {
  month: string;
  name: string;
  evaluation: number | null;
  status: "返却済み" | "返却中" | "配送済み" | "配送中" | "配送前";
}[];

const initialData: DataType = [
  {
    month: "2024/10",
    name: "Sony ワイヤレスノイズキャンセリングステレオヘッドセット WF-1000XM5",
    evaluation: null,
    status: "配送前",
  },
  {
    month: "2024/09",
    name: "Sony ワイヤレスノイズキャンセリングステレオヘッドセット WF-1000XM4",
    evaluation: null,
    status: "配送中",
  },
  {
    month: "2024/08",
    name: "Sony ワイヤレスノイズキャンセリングステレオヘッドセット WF-1000XM3",
    evaluation: 4,
    status: "配送済み",
  },
  {
    month: "2024/07",
    name: "Sony ワイヤレスノイズキャンセリングステレオヘッドセット WF-1000XM2",
    evaluation: 3,
    status: "返却中",
  },
  {
    month: "2024/06",
    name: "Sony ワイヤレスノイズキャンセリングステレオヘッドセット WF-1000XM1",
    evaluation: 5,
    status: "返却済み",
  },
];

/**
 * 評価を星に変換する関数
 * @param evaluate 1~5の評価 (nullなら評価前)
 * @returns ★☆☆☆☆のような評価表記
 **/
const evaluateToStar = (evaluate: number | null) => {
  if (evaluate === null) {
    return "評価前";
  }
  const star = "★";
  const emptyStar = "☆";
  return star.repeat(evaluate) + emptyStar.repeat(5 - evaluate);
};

const Page = () => {
  const [data, setData] = useState(initialData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentItemIndex, setCurrentItemIndex] = useState<number | null>(null);
  const [newEvaluation, setNewEvaluation] = useState<string>("");

  // モーダルを開き、評価対象のアイテムを設定
  const openEvaluationModal = (index: number) => {
    setCurrentItemIndex(index);
    setNewEvaluation("");
    onOpen();
  };

  // 評価を保存する
  const handleSaveEvaluation = () => {
    if (currentItemIndex !== null) {
      const updatedData = [...data];
      updatedData[currentItemIndex].evaluation = parseInt(newEvaluation);
      setData(updatedData);
      onClose();
    }
  };

  // 返却ボタンを押したときの処理
  const handleReturn = (index: number) => {
    const updatedData = [...data];
    if (updatedData[index].status === "配送済み") {
      updatedData[index].status = "返却中"; // ステータスを「返却中」に変更
    }
    setData(updatedData);
  };

  return (
    <>
      <Box textAlign={"center"} fontSize={"x-large"} fontWeight={"bold"} my={4}>
        過去の商品のページ
      </Box>

      <TableContainer maxWidth={"1024px"} mx="auto">
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th fontSize={"large"}>利用月</Th>
              <Th width={"532px"} fontSize={"large"}>
                商品名
              </Th>
              <Th fontSize={"large"}>評価</Th>
              <Th fontSize={"large"}>配送状況</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index}>
                <Td>{item.month}</Td>
                <Td width={"532px"}>
                  <Box whiteSpace="normal" overflowWrap="break-word">
                    {item.name}
                  </Box>
                </Td>
                <Td>{evaluateToStar(item.evaluation)}</Td>
                <Td>{item.status}</Td>
                <Td>
                  <Flex flexDirection={"column"} gap={2}>
                    <Button
                      colorScheme="teal"
                      variant="solid"
                      isDisabled={item.status !== "配送済み"}
                      onClick={() => handleReturn(index)}
                    >
                      返却
                    </Button>
                    <Button
                      colorScheme="yellow"
                      variant="solid"
                      onClick={() => openEvaluationModal(index)}
                      isDisabled={item.evaluation !== null}
                    >
                      評価
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* 評価用モーダル */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>評価を入力してください</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RadioGroup onChange={setNewEvaluation} value={newEvaluation}>
              <VStack spacing={3}>
                <Radio value="1">★☆☆☆☆</Radio>
                <Radio value="2">★★☆☆☆</Radio>
                <Radio value="3">★★★☆☆</Radio>
                <Radio value="4">★★★★☆</Radio>
                <Radio value="5">★★★★★</Radio>
              </VStack>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSaveEvaluation}
              isDisabled={!newEvaluation}
            >
              保存
            </Button>
            <Button onClick={onClose}>キャンセル</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Page;
