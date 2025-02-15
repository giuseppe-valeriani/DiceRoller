import { useState } from "react";
import { Roll, DoubleRoll } from "./utils/rolling";
import SelectionDie from "./components/selectionDie/SelectionDie";
import Twenty from "./components/twenty/Twenty";
import NumberDice from "./components/numberDice/NumberDice";
import Launcher from "./components/launcher/Launcher";
import Outcome from "./components/outcome/Outcome";
import "./app.scss";

function App() {
  const [sides, setSides] = useState(4);
  const [quantity, setQuantity] = useState(1);
  const [mod, setMod] = useState("straight");
  const [result, setResult] = useState();

  function normalRoll() {
    let outcome = 0;
    for (let i = 0; i < quantity; i++) {
      console.log("click");
      let partial = Roll(sides);
      outcome += partial;
    }
    setResult(outcome);
  }

  function twentyRoll() {
    let outcome = DoubleRoll(mod);
    setResult(outcome);
  }

  return (
    <main>
      <header>Rolling Dice</header>
      <section className="chosing-section arranging">
        <article className="chosing-section__divider">
          <SelectionDie sides={sides} setSides={setSides} />
          {sides === 4 && (
            <NumberDice quantity={quantity} setQuantity={setQuantity} />
          )}
          {sides === 6 && (
            <NumberDice quantity={quantity} setQuantity={setQuantity} />
          )}
          {sides === 8 && (
            <NumberDice quantity={quantity} setQuantity={setQuantity} />
          )}
          {sides === 10 && (
            <NumberDice quantity={quantity} setQuantity={setQuantity} />
          )}
          {sides === 12 && (
            <NumberDice quantity={quantity} setQuantity={setQuantity} />
          )}
          {sides === 20 && <Twenty mod={mod} setMod={setMod} />}
          {sides === 100 && <NumberDice quantity={quantity} />}
        </article>
      </section>
      <section className="rolling-section arranging">
        {sides === 4 && <Launcher roll={normalRoll} />}
        {sides === 6 && <Launcher roll={normalRoll} />}
        {sides === 8 && <Launcher roll={normalRoll} />}
        {sides === 10 && <Launcher roll={normalRoll} />}
        {sides === 12 && <Launcher roll={normalRoll} />}
        {sides === 20 && mod === "straight" && <Launcher roll={normalRoll} />}
        {sides === 20 && mod === "advantage" && <Launcher roll={twentyRoll} />}
        {sides === 20 && mod === "disadvantage" && (
          <Launcher roll={twentyRoll} />
        )}
        {sides === 100 && <Launcher roll={normalRoll} />}
        <Outcome result={result} />
      </section>
    </main>
  );
}

export default App;
