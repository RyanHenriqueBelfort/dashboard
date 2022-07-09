import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
    <Box mr='4' textAlign='right'>
      <Text>Ryan Henrique</Text>
      <Text
        color='gray.300'
        fontSize='small'
      >
        ryanhenriqueab@gmail.com</Text>
    </Box>

    <Avatar
      size='md'
      name='Ryan
      Henrique'
      src='https://avatars.githubusercontent.com/u/70604408?v=4'
    />
</Flex> 
  )
}
