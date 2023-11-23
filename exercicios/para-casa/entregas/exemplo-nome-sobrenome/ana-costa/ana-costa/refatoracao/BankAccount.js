import { Client } from './Client'
import { Bank } from './Bank'
import { Validators } from './BankAccountValidators';

export class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance = 0;


  constructor(client,bank,accountNumber,agencyNumber){
    Validators.validateClient(client);
    Validators.validateBank(bank);

    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
  }

  get balance() {
    return this.#balance;
  }

  set balance(newBalance){
    this.#balance = newBalance;
  }

  creditAmount(amount){
    Validators.validatePositive(amount, 'creditar');
    Validators.validateAmount(amount)
    this.#balance += amount;
  }

  debit(amount) {
    Validators.validatePositive(amount, 'debitar');
    this.#balance -= amount;
    console.log(`O novo saldo da conta é: R$ ${this.#balance.toFixed(2)}`)
  }

  transferTo(anotherAccount, amount) {
    Validators.validateAccount(anotherAccount)
    Validators.validatePositive(amount, 'transferir')
    let totalAmount = Validators.calculateTotalAmount(amount,this.bank);
    Validators.validateSufficientBalance(totalAmount, this.#balance);

    this.debit(totalAmount);
    anotherAccount.creditAmount(amount);
    console.log(`O saldo atual da conta de origem é de R$ ${this.#balance}`);
   }

   closeAccount(){
    Validators.validateBalance(this.balance)
    Object.assign(this, {
      client: undefined,
      accountNumber: undefined,
      agencyNumber: undefined,
      bank: undefined
    });
   }

   cashWithdrawal(amount) {
    if(amount <= this.balance) {
      this.debit(amount)
    } else {
      throw new Error(`Não foi possível realizar saque, saldo insuficiente`)
    }
   }


}