import { Heading, HStack, VStack, Text, Image } from 'native-base'

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <Image
        source={{ uri: 'https://github.com/guivictorr.png' }}
        boxSize={16}
        alt="Imagem do usuário"
        mr={4}
      />
      <VStack>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>

        <Heading color="gray.100" fontSize="md">
          Rodrigo
        </Heading>
      </VStack>
    </HStack>
  )
}
