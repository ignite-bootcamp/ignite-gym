import { ScreenHeader } from '@components/ScreenHeader'
import { VStack } from 'native-base'

export function History() {
  return (
    <VStack color="white" flex={1}>
      <ScreenHeader title="Histórico" />
    </VStack>
  )
}
