import React, { useContext } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import Cookies from 'js-cookie'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Switch,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { styled } from '@mui/system'

import { Store } from '../utils/store'

const Separator = styled('div')({
  flexGrow: 1,
})

export default function Layout({ children, title, description }) {
  const { state, dispatch } = useContext(Store)
  const { darkMode } = state

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208000',
      },
    },
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
  })

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' })

    const newDarkMode = !darkMode
    Cookies.set('dark-mode', newDarkMode ? 'ON' : 'OFF')
  }

  return (
    <>
      <Head>
        <title>{title ? `${title} | Papermint` : 'Papermint'}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="static"
          sx={{
            backgroundColor: '#203040',
            '& a': {
              color: '#ffffff',
              marginLeft: 10,
            },
          }}
        >
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                  }}
                >
                  Papermint
                </Typography>
              </Link>
            </NextLink>

            <Separator />
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
            </div>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </Toolbar>
        </AppBar>

        <Container
          sx={{
            minHeight: '80vh',
          }}
        >
          {children}
        </Container>

        <footer>
          <Typography
            sx={{
              textAlign: 'center',
              padding: '1rem 0',
              marginTop: 10,
            }}
          >
            All rights reserved. Paparmint
          </Typography>
        </footer>
      </ThemeProvider>
    </>
  )
}
