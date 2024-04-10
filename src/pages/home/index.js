import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, Grid, Typography, Container, Input, Link } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import stylePage from './style';
import Header from '../../components/header';
import PrimaryButton from '../../components/customButtom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: this.props.isAuth,
      openAlert: false,
      referral: '',
    };
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
  }

  render() {
    const { classes, t } = this.props;

    return (
      <>
        <Header />
        <Container>
          <Grid className={classes.container}>
            <div className={classes.cardTitle}>
              <Typography component='h1'>Escolha Uma opcao</Typography>
            </div>
            <div className={classes.centraliza}>
              <div className={classes.cardInputs}>
                <div>
                  <Link href='/deposito'>
                    <PrimaryButton text='Deposito' />
                  </Link>
                </div>
                <div>
                  <Link href='/saque'>
                    <PrimaryButton text='Saque' />
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes.cardTitle}>
              <Link href='/'>
                <PrimaryButton text='<- Voltar' background='#ED3237' />
              </Link>
            </div>
          </Grid>
        </Container>
      </>
    );
  }
}

export default withRouter(withStyles(stylePage)(withTranslation()(Home)));
