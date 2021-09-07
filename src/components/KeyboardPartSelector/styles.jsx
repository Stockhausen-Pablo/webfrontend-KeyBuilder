export default theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  selector:{
    position: 'absolute',
    width: '33vw',
    height: '75vh'
  },
});