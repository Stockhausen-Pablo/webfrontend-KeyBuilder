export default theme => ({
  root: {
    overflow: 'auto',
    padding: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    height: '70vh',
    backgroundColor: theme.palette.secondary.main
  },
  control: {
    padding: theme.spacing(2),
  },
});
