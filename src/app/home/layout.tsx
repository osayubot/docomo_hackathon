import NavigationTab from "./NavigationTab";
import { Container } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationTab />
      <Container>{children}</Container>
    </>
  );
}
