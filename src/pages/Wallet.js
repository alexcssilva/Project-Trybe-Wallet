import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalExpense: 0,
      exchangeUsed: 'BRL',
    };
  }

  render() {
    const { getEmail } = this.props;
    const { totalExpense, exchangeUsed } = this.state;
    return (
      <div>
        <header>
          <p data-testid="email-field">{getEmail}</p>
        </header>
        <p data-testid="total-field">{totalExpense}</p>
        <p data-testid="header-currency-field">{exchangeUsed}</p>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Wallet.propTypes = {
  getEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
