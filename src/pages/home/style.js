export const APP_SETTINGS = JSON.parse(localStorage.getItem('APP_SETTINGS')) !== null ? JSON.parse(localStorage.getItem('APP_SETTINGS')) : [{}];

const stylePage = (theme) => ({
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
  //Location

  cardTitle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
    '& h1': {
      color: '#1A1A1A',
      fontSize: '1.5rem',
      fontWeight: '600',
      margin: 'auto',
      [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
      },
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '100%',
      minHeight: '50px',
    },
  },
  centraliza: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    flexDirection: 'column',
  },
  cardInputs: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '1rem',
    gap: '1rem',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '100%',
      placeItems: 'center',
      width: '100%',
    },
  },
  input: {
    borderRadius: '0.5rem',
    width: '100%',
    height: '2rem',
    background: '#fff',
    paddingLeft: '1rem',
    margin: '0 auto',
    border: '1px solid #000',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
});
export default stylePage;
