export const APP_SETTINGS = JSON.parse(localStorage.getItem('APP_SETTINGS')) !== null ? JSON.parse(localStorage.getItem('APP_SETTINGS')) : [{}];

const stylePage = (theme) => ({
  root: {
    flexGrow: '1',
    fontSize: '16px',
  },

  howItWorksBlock01: {
    display: 'flex',
    margin: '10px auto ',
    '& h1': {
      color: '#FFF',
      fontSize: '2rem',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
      margin: '10px 0px',
    },
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

  AppBar: {
    padding: '10px 0',
    background: '#ED3237',
    border: 'none',
    boxShadow: 'none',
  },
  AppBarLogo: {
    textAlign: 'left',
    maxWidth: '150px',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      textAlign: 'left',
      maxWidth: '130px',
    },
  },

  AppBarDrawer: {
    position: 'absolute',
    top: '1.5vh',
    right: '0',
    '& svg': {
      fontSize: '2rem',
      color: APP_SETTINGS.APP_COLOR3,
    },
    '& button': {
      padding: 0,
    },
    [theme.breakpoints.up('lg')]: {
      top: '3.5vh',
      right: '1.5rem',
      display: 'none',
    },
  },
  AppBarMenu: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: '1rem',
    fontWeight: '500',
    gap: '16px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
});

export default stylePage;
