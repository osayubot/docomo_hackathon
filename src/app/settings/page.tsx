"use client";
import NavigationBar from "@/components/NavigationBar";
import {
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  Input,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <NavigationBar pathname="/settings" />
    </Container>
  );
};
export default Page;
