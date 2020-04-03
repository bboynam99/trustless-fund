import React, {Component} from 'react';
import Button from '../Shared/Button';

import x from '../../assets/x.svg';

import '../../layout/components/withdraw.sass';

class WithdrawForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      amount: '',
      renderWithdrawal: this.props.render
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({renderWithdrawal: nextProps.renderWithdrawal});
  }

  handleTokenChange = (e) => {
    this.setState({token: e.target.value});
  }

  handleAmountChange = (e) => {
    this.setState({amount: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    await this.props.drizzle.contracts.TrustlessFund.methods.withdraw(
      this.state.amount,
      this.state.token
    ).send({
      from: this.props.drizzleState.accounts[0]
    });
  }

  closeModal = () => {
    this.setState({renderWithdrawal: false});
  }

  render() {
    if(this.state.renderWithdrawal) {
      return (
        <div className="withdraw" onClick={this.closeModal}>
          <div className="withdraw__modal">
            <img 
              src={x} 
              alt="X" 
              onClick={this.closeModal} 
              className="withdraw__x" />
            <h2 className="withdraw__header">Withdraw Token</h2>
            <form onSubmit={this.handleSubmit} className="withdraw__form">
              <label className="withdraw__label">
                Token
                <input 
                  type="text"
                  className="withdraw__input"
                  placeholder="Token"
                  onChange={this.handleTokenChange}
                  value={this.state.token}
                />
              </label>
              <label className="withdraw__label">
                Amount
                <input 
                  type="number"
                  className="withdraw__input"
                  placeholder="Amount"
                  onChange={this.handleAmountChange}
                  value={this.state.amount}
                />
              </label>
              <Button 
                text="Withdraw" 
                class="solid withdraw__button" 
                link={null} 
                button={true}
              />
            </form>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default WithdrawForm;