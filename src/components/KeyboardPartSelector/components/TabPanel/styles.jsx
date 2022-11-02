export default theme => ({
  root:{
    width: '25vw'
  },
  list:{
    position: 'relative',
    overflow: 'auto',
    maxHeight: '90vh',
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(35, 49, 86, 0.8)',
      borderRadius: 6,
    }
  },
});