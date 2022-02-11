import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setPersonalUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
      login: false,
    };
  }

  handleChance = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.disabledButton);
  };

  validatorEmail = (email) => {
    const emailRejexTesting = /[a-z0-9]+[@]+[a-z]+[.]+[a-z]/;
    return emailRejexTesting.test(email);
  };

  disabledButton = () => {
    const { email, password } = this.state;
    const SIX = 6;
    const validEmail = this.validatorEmail(email);
    if (password.length >= SIX && validEmail) {
      this.setState({ disabledButton: false });
    } else {
      this.setState({ disabledButton: true });
    }
  };

  handleClick = () => {
    this.setState({
      email: true,
      login: true,
    });
    const { setEmail, history } = this.props;
    const { email } = this.state;
    setEmail(email);
    history.push('/carteira');
  };

  render() {
    const { email, password, login, disabledButton } = this.state;
    return (
      <section>
        <form>
          <div>
            <label htmlFor="email-input">
              <input
                data-testid="email-input"
                type="text"
                onChange={ this.handleChance }
                value={ email }
                name="email"
              />
              Email
            </label>
            <label htmlFor="password-input">
              <input
                data-testid="password-input"
                type="password"
                onChange={ this.handleChance }
                name="password"
                value={ password }
              />
              Senha
            </label>
            <button
              type="submit"
              disabled={ disabledButton }
              onClick={ this.handleClick }
            >
              <p>Entrar</p>
            </button>
            {(login) && <Redirect to="/carteira" />}
          </div>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (emailInfo) => dispatch(setPersonalUser(emailInfo)),
});

Login.propTypes = {
  setEmail: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
