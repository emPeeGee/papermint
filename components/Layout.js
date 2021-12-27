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

import useStyles from '../utils/styles'
import { Store } from '../utils/store'

export default function Layout({ children, title, description }) {
  const classes = useStyles()
  const { state, dispatch } = useContext(Store)
  const { darkMode } = state

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
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
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Papermint</Typography>
              </Link>
            </NextLink>

            <div className={classes.grow}></div>
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

        <Container className={classes.main}>{children}</Container>

        <footer className={classes.footer}>
          <Typography>All rights reserved. Paparmint</Typography>
        </footer>
      </ThemeProvider>
    </>
  )
}
