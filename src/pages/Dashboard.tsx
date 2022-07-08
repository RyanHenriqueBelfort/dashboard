import { Flex } from "@chakra-ui/react";
import {Header} from "../components/Header";

export function Dashboard() {
  return (
    <Flex h='100vh' direction={'column'}>
      <Header />

      <Flex
        w='100%'
        my='6'
        maxWidth={1480}
        mx="auto"
        px="6"
      >
         
      </Flex>
    </Flex>
  )
}
