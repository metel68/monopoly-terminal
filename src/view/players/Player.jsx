import { observer } from "mobx-react-lite";

import './Player.css'
import { useCallback } from "react";

const { format } = Intl.NumberFormat();

export const Player = observer(({ playerStore, id, player, active }) => {
  const onAddMoney = useCallback(() => {
    if (playerStore.amountToTransfer > 0) {
      playerStore.addMoney(id, playerStore.amountToTransfer);

      return;
    }

    const amount = prompt(`Сколько начислить игроку ${player.name}?`);

    if (amount) {
      playerStore.addMoney(id, Number.parseInt(amount));
    }
  }, [id, playerStore, player]);

  const onSendMoney = useCallback(() => {
    const amount = prompt(`Сколько перевести от игрока ${player.name}?`);

    if (amount) {
      playerStore.sendMoney(id, Number.parseInt(amount));
    }
  }, [id, playerStore, player]);

  const onRemoveMoney = useCallback(() => {
    const amount = prompt(`Сколько списать у игрока ${player.name}?`);

    if (amount) {
      playerStore.removeMoney(id, Number.parseInt(amount));
    }
  }, [id, playerStore, player]);

  const onFuckup = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    const trigger = confirm(`Действительно объявить игрока ${player.name} банкротом?`);

    if (trigger) {
      playerStore.bankruptPlayer(id);
    }
  }, [id, playerStore, player]);

  return <div className={active ? 'player active' : 'player'}>
    <div className="text">
      {active && '> '}
      {player.name}
    </div>

    <div className="balance">
      {format(player.balance)}k
    </div>

    <div className="buttons">
      <button onClick={onAddMoney}>+</button>
      {player.balance > 0 ? <>
        <button onClick={onSendMoney}>П</button>
        <button onClick={onRemoveMoney}>-</button>
      </> : <button onClick={onFuckup}>ОЙВСЁ</button>}
    </div>
  </div>
})