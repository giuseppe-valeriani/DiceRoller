import { useState, useEffect } from "react";
import { Roll, DoubleRoll } from "./utils/rolling";
import axios from "axios";

import SelectionDie from "./components/selectionDie/SelectionDie";
import Twenty from "./components/twenty/Twenty";
import NumberDice from "./components/numberDice/NumberDice";
import Launcher from "./components/launcher/Launcher";
import Outcome from "./components/outcome/Outcome";
import LastRoll from "./components/lastRoll/LastRoll";
import "./app.scss";

function App() {
  const [sides, setSides] = useState(4);
  const [quantity, setQuantity] = useState(1);
  const [mod, setMod] = useState("straight");
  const [result, setResult] = useState();
  const [lastRollValue, setLastRollValue] = useState({});
  const url = "http://localhost:8080";

  function normalRoll() {
    let outcome = 0;
    for (let i = 0; i < quantity; i++) {
      let partial = Roll(sides);
      outcome += partial;
    }
    setResult(outcome);
  }

  function twentyRoll() {
    let outcome = DoubleRoll(mod);
    setResult(outcome);
  }

  function hundredRoll() {
    setQuantity(1);
    let outcome = Roll(100);
    setResult(outcome);
  }

  async function getLastRoll() {
    try {
      let response = await axios.get(url);
      let records = response.data;
      let lastSides = records[records.length - 1].sides;
      let lastValue = records[records.length - 1].value;
      setLastRollValue({
        sides: lastSides,
        value: lastValue,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getLastRoll();
  }, [result]);

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
          {sides === 20 && (
            <Twenty mod={mod} setMod={setMod} setQuantity={setQuantity} />
          )}
        </article>
      </section>
      <section className="rolling-section arranging">
        {sides === 4 && <Launcher roll={normalRoll} />}
        {sides === 6 && <Launcher roll={normalRoll} />}
        {sides === 8 && <Launcher roll={normalRoll} />}
        {sides === 10 && <Launcher roll={normalRoll} />}
        {sides === 12 && <Launcher roll={normalRoll} />}
        {sides === 20 && <Launcher roll={twentyRoll} />}
        {sides === 100 && <Launcher roll={hundredRoll} />}
      </section>
      <section className="outcome">
        <Outcome result={result} />
        <LastRoll lastRollValue={lastRollValue} />
      </section>
    </main>
  );
}

export default App;
