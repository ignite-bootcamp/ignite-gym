import { ScreenHeader } from '@components/ScreenHeader'
import { Center, Image, Skeleton, VStack } from 'native-base'
import { useState } from 'react'
import { ScrollView } from 'react-native'

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              boxSize={33}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <Image
              source={{ uri: 'https://github.com/guivictorr.png' }}
              alt="Foto de usuário"
              boxSize={33}
            />
          )}
        </Center>
      </ScrollView>
    </VStack>
  )
}
