import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const { getWallet } = this.props;
    return (
      <section>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { getWallet.map((wallet) => {
            const {
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates,
            } = wallet;
            const valueCot = Number(value).toFixed(2);
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{valueCot}</td>
                <td>{exchangeRates[currency].name.split('/')[0]}</td>
                <td>{ (Number(exchangeRates[currency].ask)).toFixed(2) }</td>
                <td>{ (valueCot * Number(exchangeRates[currency].ask)).toFixed(2)}</td>
                <td>Real</td>
              </tr>
            );
          }) }
        </table>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  getWallet: state.wallet.expenses,
});

Table.propTypes = {
  getWallet: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Table);
