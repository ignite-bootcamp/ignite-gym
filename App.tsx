/* eslint-disable camelcase */
import { useFonts } from 'expo-font'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { Loading } from '@components/Loading'
import { THEME } from './src/theme'
import { SignIn } from '@screens/signin'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  )
}
