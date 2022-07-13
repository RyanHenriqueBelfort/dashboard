import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  const searchRef = useRef<HTMLInputElement>(null)
  
  //const { errors } = formState

  return (
    <Flex
        as='label'
        flex='1'
        py='4'
        px='8'
        ml='6'
        maxWidth="400"
        alignSelf="center"
        color='gray.200'
        bg='gray.800'
        borderRadius='full'
      >
        <Input
          color="gray.50"
          variant='unstyled'
          placeholder='Busca na plataforma'
          _placeholder={{color: 'gray.400'}}
          ref={searchRef}
          style={{height: '4'}}
        />
          <Icon
            as={RiSearchLine}
            fontSize="20"
            _hover={{
              cursor: 'pointer'
            }}
          ></Icon>
      </Flex>
  )
}
