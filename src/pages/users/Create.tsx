import { Box, Button, Checkbox, Divider, Flex, Heading, Icon, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function Create() {
  return (
    <Box>
      <Header />

      <Flex
        w='100%'
        my='6'
        maxWidth={1480}
        mx='auto'
        px='6'
      >
        <Sidebar />
        <Box flex='1' borderRadius='8' bg='gray.800'p='8'>
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>

          <Divider my='6' borderColor='gray.700'/>

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              
            </SimpleGrid>
          </VStack>
        </Box>

        </Flex>
    </Box>
  )
}