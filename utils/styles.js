import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10
    },
  },

  main: {
    minHeight: '85vh'
  },

  footer: {
    textAlign: 'center'
  }
})

export default useStyles;