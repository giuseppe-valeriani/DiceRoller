function Roll(sides) {
  return 1 + Math.floor(Math.random() * sides);
}

function DoubleRoll(mod) {
  let firstRoll = Roll(20);

  if (mod === "straight") {
    return firstRoll;
  }
  let secondRoll = Roll(20);

  if (mod === "disadvantage") {
    return firstRoll <= secondRoll ? firstRoll : secondRoll;
  } else return firstRoll >= secondRoll ? firstRoll : secondRoll;
}

export { Roll, DoubleRoll };
