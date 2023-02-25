import { IPressableProps, Pressable, Text } from 'native-base'

type GroupProps = {
  name: string
} & IPressableProps

export function Group({ name, ...rest }: GroupProps) {
  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      _pressed={{
        borderColor: 'green.500',
        borderWidth: 1,
      }}
      {...rest}
    >
      <Text
        color="gray.200"
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  )
}
