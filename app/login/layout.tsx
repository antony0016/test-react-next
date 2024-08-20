import { Flex } from "@chakra-ui/react";
export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex height={"calc(100vh - 60px)"} justifyContent={"center"}>
      {children}
    </Flex>
  );
}
