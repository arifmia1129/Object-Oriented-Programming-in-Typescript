class BankAccount {
  id: number;
  name: string;
  private _balacne: number;

  constructor(id: number, name: string, _balance: number) {
    this.id = id;
    this.name = name;
    this._balacne = _balance;
  }

  get balance(): number {
    return this._balacne;
  }

  getBalance() {
    console.log(`Your current account balance is ${this._balacne}`);
  }

  addDeposit(amount: number) {
    this._balacne = this._balacne + amount;
  }

  set addBalance(amount: number) {
    this._balacne = this._balacne + amount;
  }
}

const myAccount = new BankAccount(123, 'Arif', 5000);

myAccount.addBalance = 200;

console.log(myAccount.balance);
