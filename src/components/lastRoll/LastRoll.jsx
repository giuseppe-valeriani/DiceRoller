function LastRoll({ lastRollValue }) {
  console.log(lastRollValue);
  return (
    <>
      Last roll on a d{lastRollValue.sides} was a: {lastRollValue.value}
    </>
  );
}

export default LastRoll;
