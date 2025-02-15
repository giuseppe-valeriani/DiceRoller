import "./outcome.scss";

function Outcome({ result }) {
  return (
    <section className="outcome">
      Your score is: <span className="outcome__score">{result}</span>
    </section>
  );
}

export default Outcome;
