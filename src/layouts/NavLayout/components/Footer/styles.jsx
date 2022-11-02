export default theme => ({
  root: {
    position: 'absolute',
    width: '100%',
  },
  navbar: {
    background: `linear-gradient(to right, ${theme.palette.navbar.main}, ${theme.palette.navbar.footerRight});`,
  }
});
