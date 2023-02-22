/* eslint-disable camelcase */
import { useFonts } from 'expo-font'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { StatusBar, Text, View } from 'react-native'
import { NativeBaseProvider } from 'native-base'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Text>Hello world</Text> : <View />}
      </View>
    </NativeBaseProvider>
  )
}
