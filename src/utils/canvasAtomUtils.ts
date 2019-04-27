import _ from "lodash";

const EXTRA_ELECTRON_DISTANCE_FROM_CENTER = 10;
const PADDING_BETWEEN_ELECTRONS = 7;

export const getElectronPosition = (
  index: number,
  valenceElectrons: number,
  radius: number
) => {
  const distanceFromCenterOfAtom = radius + EXTRA_ELECTRON_DISTANCE_FROM_CENTER;

  // Both these electrons are placed in top (s) orbital
  if (index === 1) {
    const isOnlyElectronInOrbital = valenceElectrons === 1;
    return {
      x: isOnlyElectronInOrbital ? 0 : -PADDING_BETWEEN_ELECTRONS,
      y: -distanceFromCenterOfAtom
    };
  }
  if (index === 2) {
    return {
      x: PADDING_BETWEEN_ELECTRONS,
      y: -distanceFromCenterOfAtom
    };
  }

  // Electrons 3 and 6 are placed to the right of atom, in the px orbital
  if (index === 3) {
    // 6th electron will pair up with electron in this orbital
    const isOnlyElectronInOrbital = valenceElectrons < 6;
    return {
      x: distanceFromCenterOfAtom,
      y: isOnlyElectronInOrbital ? 0 : -PADDING_BETWEEN_ELECTRONS
    };
  }
  if (index === 6) {
    return {
      x: distanceFromCenterOfAtom,
      y: PADDING_BETWEEN_ELECTRONS
    };
  }

  // Electrons 4 and 7 are placed in the bottom of atom, in the py orbital
  if (index === 4) {
    const isOnlyElectronInOrbital = valenceElectrons < 7;
    return {
      x: isOnlyElectronInOrbital ? 0 : PADDING_BETWEEN_ELECTRONS,
      y: distanceFromCenterOfAtom
    };
  }

  if (index === 7) {
    return {
      x: -PADDING_BETWEEN_ELECTRONS,
      y: distanceFromCenterOfAtom
    };
  }

  // Electrons 5 and 8 are placed to the left of the atom, in the pz orbital
  if (index === 5) {
    const isOnlyElectronInOrbital = valenceElectrons < 8;
    return {
      x: -distanceFromCenterOfAtom,
      y: isOnlyElectronInOrbital ? 0 : -PADDING_BETWEEN_ELECTRONS
    };
  }
  if (index === 8) {
    return {
      x: -distanceFromCenterOfAtom,
      y: PADDING_BETWEEN_ELECTRONS
    };
  }
  throw new Error("there are more than 8 valence electrons passed in");
};

const drawElectron = (
  context: any,
  electronLocation: { x: number; y: number },
  atomXpos: number,
  atomYPos: number
) => {
  context.beginPath();
  context.arc(
    atomXpos + electronLocation.x,
    atomYPos + electronLocation.y,
    2,
    0,
    Math.PI * 2
  );
  context.fillStyle = "yellow";
  context.fill();
  context.stroke();

  context.restore();
};

const drawCharge = (
  context: any,
  ionicCharge: number,
  xPos: number,
  yPos: number,
  radius: number
): void => {
  const positiveOrNegative = ionicCharge > 0 ? "+" : "-";
  const text = `${positiveOrNegative}${Math.abs(ionicCharge)}`;
  context.fillStyle = "black";
  context.font = "13px Arial";
  context.fillText(
    text,
    xPos + radius,
    yPos - radius - EXTRA_ELECTRON_DISTANCE_FROM_CENTER
  );
  context.restore();
};

export const drawAtomCircle = (context: any, atomData: any) => {
  const {
    initXPos,
    yPos,
    radius,
    symbol,
    moveDirection,
    valenceElectrons,
    ionicCharge
  } = atomData;

  context.strokeStyle = "black";
  context.beginPath();
  context.arc(initXPos, yPos, radius, 0, Math.PI * 2);
  context.stroke();
  context.restore();

  context.fillStyle = "black";
  context.font = "15px Arial";
  context.fillText(symbol, initXPos - 3, yPos + 3);
  context.restore();
};

export const drawAtom = (
  context: any,
  atomData: any,
  distanceElementMoved: number,
  shouldDrawCharge?: boolean
) => {
  const {
    initXPos,
    yPos,
    radius,
    symbol,
    moveDirection,
    valenceElectrons,
    ionicCharge
  } = atomData;
  const currentXPos =
    moveDirection === "RIGHT"
      ? initXPos + distanceElementMoved
      : initXPos - distanceElementMoved;

  context.strokeStyle = "black";
  context.beginPath();
  context.arc(currentXPos, yPos, radius, 0, Math.PI * 2);
  context.stroke();
  context.restore();

  context.fillStyle = "black";
  context.font = "15px Arial";
  context.fillText(symbol, currentXPos - 3, yPos + 3);
  context.restore();

  _.times(valenceElectrons, index => {
    const electronLoc = getElectronPosition(
      index + 1,
      valenceElectrons,
      radius
    );
    drawElectron(context, electronLoc, currentXPos, yPos);
  });

  if (shouldDrawCharge) {
    drawCharge(context, ionicCharge, currentXPos, yPos, radius);
  }
};
