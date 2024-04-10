import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, AppBar, Grid, Snackbar, Container, Link, Typography } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import stylePage from './style';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes, t, isTransparent } = this.props;
    let currentLanguage = JSON.parse(localStorage.getItem('language'));

    return (
      <>
        <AppBar position='static' className={classes.AppBar}>
          <div className={classes.container}>
            <Container>
              <Grid container className={classes.containerCustom}>
                <div className={classes.howItWorksBlock01}>
                  <Typography component='h1'>UniBanck</Typography>
                </div>
              </Grid>
            </Container>
          </div>
        </AppBar>
      </>
    );
  }
}

export default withRouter(withStyles(stylePage)(withTranslation()(Header)));
