import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },

  main: {
    minHeight: '80vh',
  },

  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },

  grow: {
    flexGrow: 1,
  },

  section: {
    marginTop: 10,
    marginBottom: 10,
  },

  footer: {
    textAlign: 'center',
    padding: '1rem 0',
    marginTop: 10,
  },
})

export default useStyles
