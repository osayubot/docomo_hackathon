"use client";

import {
  Button,
  Center,
  Box,
  Modal,
  ModalContent,
  ButtonProps,
} from "@chakra-ui/react";
import { useState } from "react";
import GachaModal from "./GachaModal";

type Props = { text: string } & ButtonProps;

const GachaButton = ({ text, ...restProps }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)} {...restProps}>
        {text}
      </Button>
      <GachaModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
export default GachaButton;
