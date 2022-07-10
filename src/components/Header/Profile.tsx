import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface ProfileProps{
  showProfileData: boolean
}

export function Profile({showProfileData}: ProfileProps) {
  return (
    <Flex align='center'>
      { showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Ryan Henrique</Text>
          <Text
            color='gray.300'
            fontSize='small'
          >
            ryanhenriqueab@gmail.com</Text>
        </Box>
      )}

    <Avatar
      size='md'
      name='Ryan Henrique'
      src='https://avatars.githubusercontent.com/u/70604408?v=4'
    />
</Flex> 
  )
}
