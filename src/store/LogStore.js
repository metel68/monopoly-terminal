import { makeAutoObservable } from "mobx";

export class LogStore {
  logArray = [];

  constructor() {
    makeAutoObservable(this);
  }

  logAddMoney(player, amount) {
    this.logArray.push({
      type: 'add',
      player: Object.assign({}, player),
      amount,
    });
  }

  logSendMoney(player, amount) {
    this.logArray.push({
      type: 'send',
      player: Object.assign({}, player),
      amount,
    });
  }

  logRemoveMoney(player, amount) {
    this.logArray.push({
      type: 'remove',
      player: Object.assign({}, player),
      amount,
    });
  }

  clear() {
    this.logArray = [];
  }
}