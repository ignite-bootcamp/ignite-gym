import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  components: {
    Input: {
      defaultProps: {
        bg: 'gray.700',
        h: 14,
        px: 4,
        fontSize: 'md',
        borderWidth: 0,
        color: 'white',
        placeholderTextColor: 'gray.300',
        _focus: {
          bg: 'gray.700',
          borderWidth: 1,
          borderColor: 'green.500',
        },
      },
    },
    Button: {
      defaultProps: {
        w: 'full',
        h: 14,
        bg: 'green.700',
        rounded: 'sm',
        _pressed: {
          bg: 'green.500',
        },
        _text: {
          color: 'white',
          fontWeight: 700,
          fontSize: 'sm',
        },
      },
    },
  },
  fontConfig: {
    400: {
      normal: 'Roboto_400Regular',
    },
    700: {
      normal: 'Roboto_700Bold',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  colors: {
    green: {
      700: '#00875F',
      500: '#00B37E',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6',
    },
    white: '#FFFFFF',
    red: {
      500: '#F75A68',
    },
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
})
