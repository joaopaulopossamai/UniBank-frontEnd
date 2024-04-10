import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles, Grid, Typography, Container, Input, Link, Modal } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import styles from './style';
import PrimaryButton from '../../components/customButtom';
import Header from '../../components/header';

class Deposito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      inputValue: '',
    };
  }
  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleVoltarValue = () => {
    this.handleCloseModal();
  };
  render() {
    const { classes } = this.props;

    return (
      <>
        <Header />
        <Container>
          <Grid className={classes.container}>
            <div className={classes.cardTitle}>
              <Typography component='h1'>Insira o valor para Deposito</Typography>
            </div>
            <div className={classes.centraliza}>
              <div className={classes.cardInputs}>
                <div>
                  <Input placeholder='Informe o valor' type='Number' disableUnderline={true} className={classes.input} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className={classes.cardInputs}>
                <div>
                  <Input placeholder='Numero do envelope' type='Number' maxLength={12} disableUnderline={true} className={classes.input} />
                </div>
              </div>
            </div>
            <div className={classes.cardTitle}>
              <PrimaryButton text='Confirmar' onClick={this.handleOpenModal} />
              <Modal
                open={this.state.isModalOpen}
                onClose={this.handleCloseModal}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#eaeaea',
                }}
              >
                <div className={classes.modalTitle}>
                  <Typography component='h1'>Confirmar valor</Typography>
                  <br />
                  <div className={classes.ModalInputs}>
                    <PrimaryButton text='<- Voltar' background='#ED3237' onClick={this.handleVoltarValue} />

                    <Link href='/'>
                      <PrimaryButton text='Confirmar' background='green' border='none' />
                    </Link>
                  </div>
                </div>
              </Modal>
            </div>
          </Grid>
        </Container>
      </>
    );
  }
}

export default withRouter(withStyles(styles)(Deposito));
