import {Flex, Button, Stack} from '@chakra-ui/react'
import { Input } from '../components/form/Input'

export default function Home() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
     <Flex
       as='form'
       width='100%'
       maxWidth={360}
       bg='gray.800'
       p='8'
       borderRadius={8}
       flexDir='column'
     >
      <Stack spacing='4'>
        <Input name='email' label='email' type="email"></Input>
        <Input name='password' label='Senha' type="password"></Input>
      </Stack>
        <Button
          type="submit"
          mt='6'
          size='lg'
          colorScheme='pink'>Entrar</Button
        >
     </Flex>
    </Flex>
  )
}
