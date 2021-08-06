export default theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#424040',
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  selector:{
    position: 'absolute',
    width: '33vw',
    height: '58vh'
  },
  tabPanel:{
    width: '25vw',
  }
});