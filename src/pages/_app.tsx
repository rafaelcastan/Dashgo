import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {ReactQueryDevtools} from 'react-query/devtools'
import { theme } from '../styles/theme'

import { QueryClientProvider, QueryClient } from 'react-query'
import { SidebarDrawerProvider } from '../Contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient'

function MyApp({ Component, pageProps }:AppProps) {

  if (process.env.NODE_ENV === 'development') {
    makeServer();
  }


  return(
    <QueryClientProvider client= {queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
