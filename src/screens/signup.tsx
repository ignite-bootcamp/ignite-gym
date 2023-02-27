/* eslint-disable camelcase */
import {
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView } from 'react-native'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@components/Input'
import backgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

const signUpSchema = z
  .object({
    name: z.string({
      required_error: 'Informe o nome',
    }),
    email: z
      .string({
        required_error: 'Informe o email',
      })
      .email({ message: 'Email inválido' }),
    password: z.string({
      required_error: 'A senha deve ter pelo menos 6 caracteres',
    }),
    password_confirm: z.string({
      required_error: 'A senha deve ter pelo menos 6 caracteres',
    }),
  })
  .superRefine(({ password, password_confirm }, ctx) => {
    if (password_confirm !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'A confirmação de senha não confere',
        path: ['password_confirm'],
      })
    }
  })

type FormDataProps = z.infer<typeof signUpSchema>

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: zodResolver(signUpSchema),
  })
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  function handleSignUp({
    name,
    email,
    password,
    password_confirm,
  }: FormDataProps) {}

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack px={10} flex={1}>
        <Image
          source={backgroundImg}
          defaultSource={backgroundImg}
          alt=""
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" mb={6} fontSize="xl">
            Crie sua conta
          </Heading>
          <Stack w="full" space={4}>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password_confirm"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirmar a Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                  errorMessage={errors.password_confirm?.message}
                />
              )}
            />

            <Button onPress={handleSubmit(handleSignUp)}>
              Criar e acessar
            </Button>
          </Stack>
        </Center>
        <Button onPress={handleGoBack} variant="outline" mt={24}>
          Voltar para o login
        </Button>
      </VStack>
    </ScrollView>
  )
}
