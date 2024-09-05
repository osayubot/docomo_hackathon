"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type dataType = {
  month: string;
  name: string;
  evaluation: number | null;
  status: "返却済み" | "返却中" | "配送済み" | "配送中" | "配送前";
}[];

const data: dataType = [
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
 * evaluate: 1~5を星に変換する関数, ☆☆☆☆☆は未評価
 * @param evaluate
 * @returns
 * @example
 * evaluateToStar(1) => "★☆☆☆☆"
 * evaluateToStar(3) => "★★★☆☆"
 * evaluateToStar(5) => "★★★★★"
 * evaluateToStar(null) => "評価前"
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
  return (
    <>
      <Box textAlign={"center"} fontSize={"x-large"} fontWeight={"bold"}>
        過去の商品のページ
      </Box>

      <TableContainer width={"1024px"}>
        <Table variant="striped">
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
            {data &&
              data.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.month}</Td>
                  <Td width={"532px"}>
                    <Box sx={{ "text-wrap": "wrap" }}>{item.name}</Box>
                  </Td>
                  <Td>{evaluateToStar(item.evaluation)}</Td>
                  <Td>{item.status}</Td>
                  <Td>
                    <Flex flexDirection={"column"} gap={2}>
                      <Button
                        colorScheme="teal"
                        variant="solid"
                        isDisabled={item.status !== "配送済み"}
                      >
                        返却
                      </Button>
                      <Button
                        colorScheme="yellow"
                        variant="solid"
                        isDisabled={item.evaluation === null}
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
    </>
  );
};
export default Page;
