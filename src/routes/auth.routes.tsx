import { createStackNavigator } from '@react-navigation/stack'
import { SignIn } from '@screens/signin'
import { SignUp } from '@screens/signup'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  )
}
