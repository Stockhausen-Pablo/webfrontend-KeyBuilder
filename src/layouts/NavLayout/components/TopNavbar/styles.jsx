export default theme => ({
  leftStart: {
    paddingLeft: '2em'
  },
  rightEnd: {
    paddingRight: '2em'
  },
  navbar:{
    background: `linear-gradient(to right, ${theme.palette.navbar.main}, ${theme.palette.navbar.topperRight});`
  }
});