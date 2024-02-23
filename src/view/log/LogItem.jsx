export const LogItem = ({ item }) => <div>
  {item.type === 'add' && <span>Игроку <b>{item.player.name}</b> начислено <b>{item.amount}k</b>, баланс <b>{item.player.balance}k</b></span>}
  {item.type === 'send' && <span>Игрок <b>{item.player.name}</b> готовится перевести <b>{item.amount}k</b>, баланс <b>{item.player.balance}k</b></span>}
  {item.type === 'remove' && <span>У игрока <b>{item.player.name}</b> списано <b>{item.amount}k</b>, баланс <b>{item.player.balance}k</b></span>}
</div>
