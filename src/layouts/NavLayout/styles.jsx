export default theme => ({
  topNavbar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    right: 'auto',
  },
  sidebar: {
    width: '270px'
  },
  content: {
    marginTop: '64px',
    minHeight: 'calc(-145px + 100vh)',
    position: 'relative',
    paddingBottom: '1rem',
    paddingTop: '1rem',
    //backgroundColor: theme.palette.background.dark
  },
  contentShift: {
    marginLeft: '270px'
  },
  footer: {
    position: 'absolute',
    bottom: '0px',
  }

});
