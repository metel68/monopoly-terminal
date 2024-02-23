import { makeAutoObservable } from "mobx";

export class PlayersStore {
  logStore;

  players = [];
  currentPlayer = 0;
  buffer = 0;

  constructor(logStore) {
    makeAutoObservable(this);

    this.logStore = logStore;
  }

  start = (playerCount) => {
    if (playerCount < 2 || playerCount > 4) {
      throw new Error('Допускается от 2 до 4 игроков!');
    }

    this.logStore.clear();

    const playerNames = ['Красный', "Синий", "Зеленый", "Желтый"];

    this.players = playerNames.slice(0, playerCount).map((name) => ({ name, balance: 15000 }));
    this.currentPlayer = Math.floor(Math.random() * playerCount);
  }

  nextPlayer = () => {
    this.currentPlayer++;

    if (this.currentPlayer >= this.players.length) {
      this.currentPlayer = 0;
    }
  }

  addMoney = (playerId, amount) => {
    this.buffer = 0;
    this.players[playerId].balance += amount;
    this.logStore.logAddMoney(this.players[playerId], amount);
  }

  // TODO: отмена перевода?
  sendMoney = (playerId, amount) => {
    this.removeMoney(playerId, amount, false);
    this.buffer += amount;
    this.logStore.logSendMoney(this.players[playerId], amount);
  }

  removeMoney = (playerId, amount, log = true) => {
    const player = this.players[playerId];

    if (player.balance >= amount) {
      player.balance -= amount;
      if (log) {
        this.logStore.logRemoveMoney(player, amount);
      }
    } else {
      const message = `У игрока ${player.name} нет столько денег!`;

      alert(message);
      throw new Error(message)
    }
  }

  bankruptPlayer = (playerId) => {
    this.players.splice(playerId, 1);

    if (this.currentPlayer >= this.players.length) {
      this.currentPlayer = 0;
    }
  }
}