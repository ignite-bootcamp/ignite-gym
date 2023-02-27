import { Heading, HStack, VStack, Text, IconButton } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { UserPhoto } from './UserPhoto'

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: 'https://github.com/guivictorr.png' }}
        boxSize={16}
        alt="Imagem do usuário"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá
        </Text>

        <Heading color="gray.100" fontSize="md">
          Rodrigo
        </Heading>
      </VStack>

      <IconButton
        _icon={{
          as: MaterialIcons,
          name: 'logout',
          color: 'gray.200',
          size: 7,
        }}
        _pressed={{
          bg: 'gray.100:alpha.10',
        }}
      />
    </HStack>
  )
}
