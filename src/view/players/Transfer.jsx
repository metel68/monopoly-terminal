import './Transfer.css';

export const Transfer = ({ amountToTransfer, undo }) => {
  if (amountToTransfer <= 0) {
    return null;
  }

  return <div className="transfer-block">
    <div className="transfer"><b>К переводу:</b> {amountToTransfer}k</div>
    <button onClick={undo}>⎌</button>
  </div>
}
