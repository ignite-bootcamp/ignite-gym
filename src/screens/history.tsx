import { HistoryCard } from '@components/HistoryCard'
import { ScreenHeader } from '@components/ScreenHeader'
import { VStack } from 'native-base'

export function History() {
  return (
    <VStack color="white" flex={1}>
      <ScreenHeader title="Histórico" />

      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
      <HistoryCard />
    </VStack>
  )
}
