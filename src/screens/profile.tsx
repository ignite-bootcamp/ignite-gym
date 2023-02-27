import { useState } from 'react'
import {
  Button,
  Center,
  Heading,
  Input,
  Skeleton,
  Stack,
  Text,
  useToast,
  VStack,
} from 'native-base'
import { ScrollView, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'

const PIC_MEGABYTES_LIMIT = 5

function convertBytesToMegabytes(bytes: number) {
  return bytes / 1024 / 1024
}

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/guivictorr.png',
  )

  const toast = useToast()

  async function handleUserPhotoSelected() {
    setPhotoIsLoading(true)
    try {
      const selectedPhoto = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      if (selectedPhoto.canceled) {
        return
      }

      const uri = selectedPhoto.assets[0].uri

      if (uri) {
        const photoInfo = await FileSystem.getInfoAsync(uri)

        if (
          photoInfo.size &&
          convertBytesToMegabytes(photoInfo.size) > PIC_MEGABYTES_LIMIT
        ) {
          return toast.show({
            title: `Essa imagem é muito grande. Escolhe uma até ${PIC_MEGABYTES_LIMIT}MB`,
            placement: 'top',
            bgColor: 'red.500',
          })
        }

        setUserPhoto(selectedPhoto.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

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
            <UserPhoto
              source={{ uri: userPhoto }}
              alt="Foto de usuário"
              boxSize={33}
            />
          )}

          <TouchableOpacity onPress={handleUserPhotoSelected}>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Stack w="full" space={4}>
            <Input bg="gray.600" placeholder="Nome" />
            <Input bg="gray.600" placeholder="E-mail" isDisabled />
          </Stack>
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2}>
            Alterar senha
          </Heading>
          <Stack w="full" space={4}>
            <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />
            <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />
            <Input
              bg="gray.600"
              placeholder="Confirme a nova senha"
              secureTextEntry
            />
            <Button mt={4}>Atualizar</Button>
          </Stack>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
