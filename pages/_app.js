import { ChakraProvider, ColorModeProvider} from '@chakra-ui/react'
import theme from "../theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider value="light" options={{
        useSystsemColorMode: true
      }}>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp