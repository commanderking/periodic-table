import _ from "lodash";
export const getElectronPosition = (
  index: number,
  valenceElectrons: number,
  radius: number
) => {
  const distanceFromCenterOfAtom = radius + 10;
  const paddingBetweenElectrons = 7;

  // Both these electrons are placed in top (s) orbital
  if (index === 1) {
    const isOnlyElectronInOrbital = valenceElectrons === 1;
    return {
      x: isOnlyElectronInOrbital ? 0 : -paddingBetweenElectrons,
      y: -distanceFromCenterOfAtom
    };
  }
  if (index === 2) {
    return {
      x: paddingBetweenElectrons,
      y: -distanceFromCenterOfAtom
    };
  }

  // Electrons 3 and 6 are placed to the right of atom, in the px orbital
  if (index === 3) {
    // 6th electron will pair up with electron in this orbital
    const isOnlyElectronInOrbital = valenceElectrons < 6;
    return {
      x: distanceFromCenterOfAtom,
      y: isOnlyElectronInOrbital ? 0 : -paddingBetweenElectrons
    };
  }
  if (index === 6) {
    return {
      x: distanceFromCenterOfAtom,
      y: paddingBetweenElectrons
    };
  }

  // Electrons 4 and 7 are placed in the bottom of atom, in the py orbital
  if (index === 4) {
    const isOnlyElectronInOrbital = valenceElectrons < 7;
    return {
      x: isOnlyElectronInOrbital ? 0 : paddingBetweenElectrons,
      y: distanceFromCenterOfAtom
    };
  }

  if (index === 7) {
    return {
      x: -paddingBetweenElectrons,
      y: distanceFromCenterOfAtom
    };
  }

  // Electrons 5 and 8 are placed to the left of the atom, in the pz orbital
  if (index === 5) {
    const isOnlyElectronInOrbital = valenceElectrons < 8;
    return {
      x: -distanceFromCenterOfAtom,
      y: isOnlyElectronInOrbital ? 0 : -paddingBetweenElectrons
    };
  }
  if (index === 8) {
    return {
      x: -distanceFromCenterOfAtom,
      y: paddingBetweenElectrons
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
  context.stroke();
  context.restore();
};

export const drawAtom = (
  context: any,
  atomData: any,
  distanceElementMoved: number
) => {
  const {
    initXPos,
    yPos,
    radius,
    symbol,
    moveDirection,
    valenceElectrons
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

  context.font = "11px Arial";
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
};
