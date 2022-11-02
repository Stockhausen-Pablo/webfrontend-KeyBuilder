export default theme => ({
  root: {
    overflow: 'hidden',
    padding: theme.spacing(2),
    flexGrow: 1,
    height: '100vh',
    minHeight: '100%'
  },
  paper: {
    textAlign: 'center',
    height: '100%',
    backgroundColor: theme.palette.secondary.main
  },
  control: {
    padding: theme.spacing(2),
  }
});
