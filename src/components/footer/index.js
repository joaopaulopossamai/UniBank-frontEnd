import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, Grid, Container, Typography, Link } from '@material-ui/core';

import { withTranslation } from 'react-i18next';
import stylePage from './style';

export const APP_SETTINGS = JSON.parse(localStorage.getItem('APP_SETTINGS')) !== null ? JSON.parse(localStorage.getItem('APP_SETTINGS')) : [{}];

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countdown: {
        days: '',
        hours: '',
        mins: '',
        secs: '',
      },
    };
  }

  render() {
    const { classes, t } = this.props;

    return (
      <>
        <Grid container className={classes.banner1}>
          <Container>
            <Grid className={classes.howItWorksFinal}>
              <div item xs={12} md={12} className={classes.containerCustom}>
                <Typography component='h2'>{t('landingPage.titleLink')}</Typography>
              </div>

              <div item xs={4} md={4} className={classes.containerCustom2}>
                <Link href='/envio-brasil' className={classes.link2}>
                  {t('landingPage.link')}
                </Link>
                <Link href='/cambio-crypto' style={{ marginBottom: '1rem' }} className={classes.link2}>
                  {t('landingPage.link2')}
                </Link>
              </div>
            </Grid>
          </Container>
        </Grid>
      </>
    );
  }
}

export default withRouter(withStyles(stylePage)(withTranslation()(Footer)));
