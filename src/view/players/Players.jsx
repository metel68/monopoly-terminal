import { StartGame } from "./StartGame";
import { observer } from "mobx-react-lite";

import './Players.css';
import { Player } from "./Player";
import { Transfer } from "./Transfer";

export const Players = observer(({ playerStore }) => {
  const { players, currentPlayer, nextPlayer, amountToTransfer, undo } = playerStore;

  return <div>
    {players.map((player, i) =>
      <Player id={i} playerStore={playerStore} player={player} active={currentPlayer === i} key={player.name} />
    )}
    {players.length < 2 && <StartGame playerStore={playerStore} />}
    {players.length >= 2 && <button className="next" onClick={nextPlayer}>Следующий</button>}

    <Transfer amountToTransfer={amountToTransfer} undo={undo} />
  </div>
})