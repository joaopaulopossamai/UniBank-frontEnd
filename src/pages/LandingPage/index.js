import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, Grid, Typography, Container, Input, Link } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import stylePage from './style';
import Header from '../../components/header';
import PrimaryButton from '../../components/customButtom';

class LandingPage extends Component {
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
              <Typography component='h1'>Insira seus Dados</Typography>
            </div>
            <div className={classes.centraliza}>
              <div className={classes.cardInputs}>
                <div>
                  <Input placeholder='N cartao' type='Number' maxLength={16} disableUnderline={true} className={classes.input} variant='outlined' />
                </div>
                <div>
                  <Input placeholder='CVV' type='Number' maxLength={3} disableUnderline={true} className={classes.input} variant='outlined' />
                </div>
              </div>
              <div className={classes.cardInputs}>
                <div>
                  <Input placeholder='Senha' type='Number' maxLength={11} disableUnderline={true} className={classes.input} variant='outlined' />
                </div>
              </div>
            </div>
            <div className={classes.cardTitle}>
              <Link href='/home'>
                <PrimaryButton text='Iniciar' />
              </Link>
            </div>
          </Grid>
        </Container>
      </>
    );
  }
}

export default withRouter(withStyles(stylePage)(withTranslation()(LandingPage)));
