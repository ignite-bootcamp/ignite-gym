import { Image, VStack } from 'native-base'

import backgroundImg from '@assets/background.png'

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={backgroundImg}
        alt=""
        resizeMode="contain"
        position="absolute"
      />
    </VStack>
  )
}
