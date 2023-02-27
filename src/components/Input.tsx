import { FormControl, IInputProps, Input as NativeBaseInput } from 'native-base'

type InputProps = IInputProps & {
  errorMessage?: string | null
}

export function Input({ errorMessage, ...rest }: InputProps) {
  const isInvalid = !!errorMessage
  return (
    <FormControl isInvalid={isInvalid}>
      <NativeBaseInput
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        {...rest}
      />

      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  )
}
