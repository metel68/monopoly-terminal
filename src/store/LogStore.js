import { makeAutoObservable } from "mobx";
import { Actions } from "../consts/Actions";

export class LogStore {
  logArray = [];

  constructor() {
    makeAutoObservable(this);
  }

  logAddMoney(player, amount) {
    this.logArray.push({
      type: Actions.ADD,
      player: Object.assign({}, player),
      amount,
    });
  }

  logSendMoney(player, amount) {
    this.logArray.push({
      type: Actions.SEND,
      player: Object.assign({}, player),
      amount,
    });
  }

  logRemoveMoney(player, amount) {
    this.logArray.push({
      type: Actions.REMOVE,
      player: Object.assign({}, player),
      amount,
    });
  }

  logUndo(amount) {
    this.logArray.push({
      type: Actions.UNDO,
      amount,
    });
  }

  clear() {
    this.logArray = [];
  }
}