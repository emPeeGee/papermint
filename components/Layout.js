import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

import useStyles from '../utils/styles';

 export default function Layout({children}) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Papermint</title>
      </Head>

      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>
            Papermint
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.main}>
        {children}
      </Container>

      <footer className={classes.footer}>
        <Typography>
          All rights reserved. Paparmint
        </Typography>
      </footer>
    </>
  )
}