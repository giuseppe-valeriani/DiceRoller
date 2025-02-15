import "./selection-die.scss";

function SelectionDie({ sides, setSides }) {
  return (
    <>
      <p>Please select the type of dice to roll:</p>
      <select
        className="selecting-die"
        name="selecting-die"
        id="selecting-die"
        defaultValue={sides}
        onChange={(e) => setSides(Number(e.target.value))}
      >
        <option value="4">D4</option>
        <option value="6">D6</option>
        <option value="8">D8</option>
        <option value="10">D10</option>
        <option value="12">D12</option>
        <option value="20">D20</option>
        <option value="100">D100</option>
      </select>
    </>
  );
}

export default SelectionDie;
