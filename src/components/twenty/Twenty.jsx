import "./twenty.scss";

function Twenty({ mod, setMod }) {
  return (
    <span className="twenty">
      <label htmlFor="advantage">
        Advantage
        <input
          id="advantage"
          value={mod}
          type="radio"
          name="twenty"
          checked={mod === "advantage"}
          onChange={() => setMod("advantage")}
        />
      </label>
      <label htmlFor="straight">
        Straight Roll
        <input
          id="straight"
          value={mod}
          type="radio"
          name="twenty"
          checked={mod === "straight"}
          onChange={() => setMod("straight")}
        />
      </label>
      <label htmlFor="disadvantage">
        Disadvantage
        <input
          id="disadvantage"
          value={mod}
          type="radio"
          name="twenty"
          checked={mod === "disadvantage"}
          onChange={() => setMod("disadvantage")}
        />
      </label>
    </span>
  );
}

export default Twenty;
