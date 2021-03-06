import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/Index";
import { Pagination } from "../../components/Pagination/Index";
import { Sidebar } from "../../components/Sidebar/Index";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
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

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>

            <Link href='/users/Create' passHref>
              <Button as='a' size='sm' cursor='pointer' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine}/>}>
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4','4','6']} color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data cadastro</Th>}
                {/* <Th></Th> */}

              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4','4','6']} color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Td>   
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Ryan Henrique</Text>
                    <Text fontSize='sm' color='gray.300'>Ryanhenriqueab@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>
                  28/07/2022
                </Td>}
                {/* <Td w='8'>
                  <Button as='a' size='sm' fontSize='sm' colorScheme='whiteAlpha' leftIcon={<Icon as={RiPencilLine}/>}>
                    Editar
                  </Button>
                </Td> */}
              </Tr>
              <Tr>
                <Td px={['4','4','6']} color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Td>   
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Ryan Henrique</Text>
                    <Text fontSize='sm' color='gray.300'>Ryanhenriqueab@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>
                  28/07/2022
                </Td>}
                {/* <Td w='8'>
                  <Button as='a' size='sm' fontSize='sm' colorScheme='whiteAlpha' leftIcon={<Icon as={RiPencilLine}/>}>
                    Editar
                  </Button>
                </Td> */}
              </Tr>
              <Tr>
                <Td px={['4','4','6']} color='gray.300' width='8'>
                  <Checkbox colorScheme='pink' />
                </Td>   
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Ryan Henrique</Text>
                    <Text fontSize='sm' color='gray.300'>Ryanhenriqueab@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>
                  28/07/2022
                </Td>}
                {/* <Td w='8'>
                  <Button as='a' size='sm' fontSize='sm' colorScheme='whiteAlpha' leftIcon={<Icon as={RiPencilLine}/>}>
                    Editar
                  </Button>
                </Td> */}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
