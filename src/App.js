import './App.css';
import { Players } from "./view/players/Players";
import { Log } from "./view/log/Log";
import { PlayersStore } from "./store/PlayersStore";
import { LogStore } from "./store/LogStore";
import { Cubes } from "./view/cubes/Cubes";

const logStore = new LogStore();
const playersStore = new PlayersStore(logStore);

function App() {
  return (
    <div className="app">
      <div className="grid">
        <div className="players"><Players playerStore={playersStore}/></div>
        <div className="log"><Log logStore={logStore}/></div>
        <div className="cubes"><Cubes/></div>
      </div>
    </div>
  );
}

export default App;
