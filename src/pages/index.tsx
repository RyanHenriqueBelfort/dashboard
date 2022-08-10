import {Flex, Button, Stack} from '@chakra-ui/react'
import { Input } from '../components/form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useRouter } from 'next/router'

type SignFormData = {
  email: string;
  password: string
}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail invalido'),
  password: yup.string().required('Senha é obrigatória')
})


export default function Home() {
  const router = useRouter()  
  
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(SignInFormSchema)
  })
  const { errors } = formState

  const handleSignIn: SubmitHandler<SignFormData> = async (values: any) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    router.push('/Dashboard')
  }

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
       onSubmit={handleSubmit(handleSignIn)}
     >
      <Stack spacing='4'>
        <Input
          name='email'
          label='email'
          type="email"
          error={errors.email}
          {...register('email')}
          />
        <Input
          name='password'
          label='Senha'
          type="password"
          {...register('password')}
          error={errors.password}
        />

      </Stack>
        
          <Button
            type="submit"
            mt='6'
            size='lg'
            colorScheme='pink'
            isLoading={formState.isSubmitting}
            >
                Entrar
            </Button>
        
     </Flex>
    </Flex>
  )
}
