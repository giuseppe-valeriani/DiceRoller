import "./number-dice.scss";

function NumberDice({ quantity, setQuantity }) {
  return (
    <>
      <p>How many dice?</p>
      <input
        className="number-dice"
        type="number"
        min="1"
        max="999"
        defaultValue={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
    </>
  );
}

export default NumberDice;
