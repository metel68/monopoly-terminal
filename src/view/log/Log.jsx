import { LogItem } from "./LogItem";
import { observer } from "mobx-react-lite";

export const Log = observer(({ logStore }) => <div>
  {logStore.logArray.map((logItem) => <LogItem item={logItem} />)}
</div>);
