export const APP_SETTINGS = JSON.parse(localStorage.getItem('APP_SETTINGS')) !== null ? JSON.parse(localStorage.getItem('APP_SETTINGS')) : [{}];

const styles = (theme) => ({
  root: {
    flexGrow: '1',
    fontSize: '16px',
  },
  container: {
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '90%',
    [theme.breakpoints.up(1700)]: {
      maxWidth: '80%',
    },
    [theme.breakpoints.up(2000)]: {
      maxWidth: '60%',
    },
  },
  banner1: {
    width: '100%',
    background: '#DDD7D7',
    height: 'auto',
    '& h2': {
      color: '#555555',
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '20px',
      textAlign: 'left',
      margin: '0rem 0rem 2rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '18px',
        textAlign: 'left',
      },
    },
  },
  howItWorksFinal: {
    padding: '0rem 0',
    background: '#DDD7D7',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gridTemplateColumns: '50% 50%',
    gap: '1rem',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      gridTemplateColumns: '100%',
      placeItems: 'center',
      alignItems: 'left',
      justifyContent: 'left',
      gap: '0rem',
    },
  },
  containerCustom: {
    paddingTop: '2rem ',
    background: 'transparent',
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'left',
    flexDirection: 'column',
    gap: '0.5rem',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'right',
      width: '100%',
    },
  },
  containerCustom2: {
    padding: '0rem ',
    background: 'transparent',
    width: '25%',
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      gap: '0rem',
      width: '100%',
    },
  },
  link2: {
    color: '#000',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem auto 0rem 0rem ',
  },
});
export default styles;
