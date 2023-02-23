import {
  Button,
  Center,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from 'native-base'

import backgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

export function SignIn() {
  return (
    <VStack px={10} flex={1} bg="gray.700">
      <Image
        source={backgroundImg}
        alt=""
        resizeMode="contain"
        position="absolute"
      />
      <Center my={24}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e seu corpo
        </Text>
      </Center>
      <Center>
        <Heading color="gray.100" mb={6} fontSize="xl">
          Acesse sua conta
        </Heading>
      </Center>

      <Input mb={4} placeholder="E-mail" keyboardType="email-address" />
      <Input mb={4} placeholder="Senha" secureTextEntry />
      <Button>Acessar</Button>
      <Button variant="outline" mt={4}>
        Criar conta
      </Button>
    </VStack>
  )
}
