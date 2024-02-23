import { useState } from "react";
import { observer } from "mobx-react-lite";

import './StartGame.css';

export const StartGame = observer(({ playerStore }) => {
  const [count, setCount] = useState(3);

  return <div className="start">
    <h2 className="title">Начать новую игру</h2>
    <label className="label"><h4>Количество игроков:</h4></label>
    <div className="start-block">
      <input type="number"
             value={count}
             maxLength={1}
             onChange={(e) => setCount(Number.parseInt(e.target.value))}
      />
      <button className="start-button" onClick={() => playerStore.start(count)}>Начать</button>
    </div>
  </div>
});
