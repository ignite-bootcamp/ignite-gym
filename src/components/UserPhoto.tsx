import { IImageProps, Image } from 'native-base'

type UserPhotoProps = IImageProps

export function UserPhoto({ alt, ...rest }: UserPhotoProps) {
  return (
    <Image
      rounded="full"
      borderWidth={2}
      borderColor="gray.400"
      alt={alt}
      {...rest}
    />
  )
}
