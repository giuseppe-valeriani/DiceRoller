import "./launcher.scss";

function Launcher({ roll }) {
  return (
    <button className="launcher" onClick={() => roll()}>
      roll
    </button>
  );
}

export default Launcher;
