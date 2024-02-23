import { StartGame } from "./StartGame";
import { observer } from "mobx-react-lite";

import './Players.css';
import { Player } from "./Player";

export const Players = observer(({ playerStore }) => {
  const { players, currentPlayer, nextPlayer, buffer } = playerStore;

  return <div>
    {players.map((player, i) =>
      <Player id={i} playerStore={playerStore} player={player} active={currentPlayer === i} key={player.name} />
    )}
    {players.length < 2 && <StartGame playerStore={playerStore} />}
    {players.length >= 2 && <button className="next" onClick={() => nextPlayer()}>Следующий</button>}

    {buffer > 0 && <div className="transfer"><b>К переводу:</b> {buffer}k</div>}
  </div>
})