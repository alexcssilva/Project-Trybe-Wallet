import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPersonalWallet } from '../actions';
import fecthCurrentApi from '../services/fetchCurrent';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      totalExpense: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
      currentList: [],
    };
  }

  componentDidMount() {
    fecthCurrentApi().then((response) => {
      const currentList = Object.entries(response)
        .filter(([key]) => key !== 'USDT').map(([, value]) => value.code);
      this.setState({
        currentList,
      });
    });
  }

  handleChance = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { setExpenses } = this.props;
    setExpenses({
      value,
      description,
      currency,
      method,
      tag,
    });
    this.setState({
      value: 0,
    });
  }

  render() {
    const { getEmail } = this.props;
    const {
      totalExpense,
      value,
      description,
      currency,
      method,
      tag,
      currentList,
    } = this.state;

    return (
      <div>
        <div>
          <header>
            <p data-testid="email-field">{getEmail}</p>
          </header>
          <p data-testid="total-field">{totalExpense}</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
        <form className="form-class">
          <label htmlFor="value-input">
            <p>Valor da Despesa</p>
            <input
              data-testid="value-input"
              type="number"
              value={ value }
              name="value"
              onChange={ this.handleChance }
              id="value-input"
            />
          </label>
          <label htmlFor="description-input">
            <p>Descrição da Despesa</p>
            <input
              data-testid="description-input"
              type="text"
              value={ description }
              name="description"
              onChange={ this.handleChance }
              id="description-input"
            />
          </label>
          <label htmlFor="currency-input">
            <p>Moeda Registrada</p>
            <select
              data-testid="currency-input"
              type="text"
              value={ currency }
              name="currency"
              onChange={ this.handleChance }
              aria-label="moeda"
            >
              {currentList && currentList.map((coins) => (
                <option
                  data-testid={ coins }
                  value={ coins }
                  key={ coins }
                >
                  { coins }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method-input">
            <select
              id="method-input"
              data-testid="method-input"
              onChange={ this.handleChance }
              value={ method }
              name="method"
            >
              <option value="Alimentação">Dinheiro</option>
              <option value="Cartão-de-crédito">Cartão de crédito</option>
              <option value="Cartão-de-débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            <select
              id="tag-input"
              data-testid="tag-input"
              onChange={ this.handleChance }
              value={ tag }
              name="tag"
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
            <button
              type="submit"
              onClick={ this.handleClick }
            >
              Adicionar despesa
            </button>
          </label>
        </form>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (walletInfo) => dispatch(setPersonalWallet(walletInfo)),
});

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});

Wallet.propTypes = {
  getEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
