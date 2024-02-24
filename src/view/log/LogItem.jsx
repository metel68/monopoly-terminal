import { Actions } from "../../consts/Actions";
import { observer } from "mobx-react-lite";

export const LogItem = observer(({ item }) => <div>
  {item.type === Actions.ADD && <span>Игроку <b>{item.player.name}</b> начислено <b>{item.amount}k</b>, баланс <b>{item.player.balance}k</b></span>}
  {item.type === Actions.SEND && <span>Игрок <b>{item.player.name}</b> готовится перевести <b>{item.amount}k</b>, баланс <b>{item.player.balance}k</b></span>}
  {item.type === Actions.REMOVE && <span>У игрока <b>{item.player.name}</b> списано <b>{item.amount}k</b>, баланс <b>{item.player.balance}k</b></span>}
  {item.type === Actions.UNDO && <span>Перевод на сумму {item.amount}k отменен</span>}
</div>);
