// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ColorModeScript initialColorMode={"light"} />
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
