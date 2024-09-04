import NavigationBar from "@/components/NavigationBar";
import { Container } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationBar />
      <Container>{children}</Container>
    </>
  );
}
