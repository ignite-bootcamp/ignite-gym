import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { HStack, VStack } from 'native-base'

export function Home() {
  return (
    <VStack color="white" flex={1}>
      <HomeHeader />
      <HStack>
        <Group name="Costas" />
        <Group name="Ombro" />
      </HStack>
    </VStack>
  )
}
