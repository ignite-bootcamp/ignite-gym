import { Center, Heading, Image, Input, Text, VStack } from 'native-base'

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

      <Input placeholder="E-mail" keyboardType="email-address" />
      <Input placeholder="Senha" secureTextEntry />
    </VStack>
  )
}
