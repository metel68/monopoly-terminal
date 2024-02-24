import { Actions } from "../../consts/Actions";
import { observer } from "mobx-react-lite";

import './LogItem.css';

export const LogItem = observer(({ item }) => <div className="log-item">
  {item.type === Actions.ADD && <span><b className={item.player.className}>{item.player.name}</b> получает <b>{item.amount}k</b>, баланс <b>{item.player.balance}k</b></span>}
  {item.type === Actions.SEND && <span><b className={item.player.className}>{item.player.name}</b> переводит <b>{item.amount}k</b>, баланс <b>{item.player.balance}k</b></span>}
  {item.type === Actions.REMOVE && <span><b className={item.player.className}>{item.player.name}</b> платит <b>{item.amount}k</b>, баланс <b>{item.player.balance}k</b></span>}
  {item.type === Actions.UNDO && <span>Перевод {item.amount}k отменен</span>}
</div>);
