import * as React from 'react'
import Head from 'next/head'
import { CacheProvider } from '@emotion/react'

import createEmotionCache from '../utils/create-emotion-cache'
import { StoreProvider } from '../utils/store'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </CacheProvider>
  )
}

export default MyApp
