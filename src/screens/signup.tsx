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

export function SignUp() {
  return (
    <VStack px={10} flex={1}>
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
          Crie sua conta
        </Heading>

        <Input mb={4} placeholder="Nome" />

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          mb={4}
        />
        <Input mb={4} placeholder="Senha" secureTextEntry />
        <Button>Criar e acessar</Button>
      </Center>
      <Button variant="outline" mt={24}>
        Voltar para o login
      </Button>
    </VStack>
  )
}
