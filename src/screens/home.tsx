import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { HStack, VStack } from 'native-base'
import { useState } from 'react'

export function Home() {
  const [groupSelected, setGroupSelected] = useState('costa')
  return (
    <VStack color="white" flex={1}>
      <HomeHeader />
      <HStack>
        <Group
          name="Costas"
          isActive={groupSelected === 'costa'}
          onPress={() => setGroupSelected('costa')}
        />
        <Group
          name="Ombro"
          isActive={groupSelected === 'ombro'}
          onPress={() => setGroupSelected('ombro')}
        />
      </HStack>
    </VStack>
  )
}
