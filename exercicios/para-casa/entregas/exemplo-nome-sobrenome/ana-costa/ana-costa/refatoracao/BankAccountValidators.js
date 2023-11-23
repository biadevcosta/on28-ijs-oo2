export class Validators {

  static verifyIfIsInstanceOfClass(instance, classType) {
    return instance instanceof classType;
  }

  static validateClient(client) {
    if (!(this.verifyIfIsInstanceOfClass(client, Client))) {
      throw new Error('Não é possível abrir conta, cliente inválido');
    }
  }

  static validateBank(bank) {
    if (!(this.verifyIfIsInstanceOfClass(bank, Bank))) {
      throw new Error('Não é possível abrir conta, banco inválido');
    }
  }

  static validateAccount(anotherAccount) {
    if (!(this.verifyIfIsInstanceOfClass(anotherAccount, BankAccount))) {
      throw new Error('Não é possível fazer transferência, conta inválida');
    }
  }

  static isNumber(amount) {
    return typeof amount === 'number';
  }

  static validatePositive(amount, operation) {
    if (!this.isNumber(amount) || amount < 0) {
      throw new Error(`Não é possível ${operation} valor, valor passado ${amount < 0 ? 'é menor que 0' : 'não é do tipo number'}`);
    }
  }

  static validateBalance(balance){
    if(balance !== 0) {
      throw new Error('Não é possível encerrar a conta, ainda há saldo')
    }
  }

  static validateSufficientBalance(totalAmount, balance) {
    if (totalAmount > balance) {
      throw new Error(`Não é possível fazer transferência, saldo insuficiente.
       Seu saldo é R$${balance} e o valor da transferência R$ ${totalAmount}`);
    }
  }

  static calculateTotalAmount(amount,bank){
    const isTransferToOtherBank = bank.bankCode !== anotherAccount.bank.bankCode;
    return totalAmount = isTransferToOtherBank ? (amount + (amount * bank.getTransferTax())) : amount;
  }
}
