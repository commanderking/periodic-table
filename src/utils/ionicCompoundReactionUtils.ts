// Determine if elements can actually react
import _ from "lodash";
import { ElementWithReactionBehavior, Element } from "../types/element";
import { ElementToDraw } from "../ionicReactionBasic/IonicReactionBasicTypes";

const getValenceElectrons = (
  element: Element | ElementWithReactionBehavior
): number | null => {
  return _.last(element.shells) || null;
};

const hasOneDonorAndOneReceiver = (
  elementOne: ElementWithReactionBehavior,
  elementTwo: ElementWithReactionBehavior
) => {
  const firstElementElectrons = getValenceElectrons(elementOne);
  const secondElementElectrons = getValenceElectrons(elementTwo);

  if (!firstElementElectrons || !secondElementElectrons) {
    return false;
  }
  if (
    (firstElementElectrons <= 3 && secondElementElectrons >= 6) ||
    (secondElementElectrons <= 3 && secondElementElectrons >= 6)
  ) {
    return true;
  }
  return false;
};

export const canIonicReactionHappen = (
  elementOne: ElementWithReactionBehavior,
  elementTwo: ElementWithReactionBehavior
): boolean => {
  if (!(elementOne.canFormIonicCompound && elementTwo.canFormIonicCompound)) {
    return false;
  }

  if (hasOneDonorAndOneReceiver(elementOne, elementTwo)) {
    return true;
  }

  return false;
};

export const canMolecularReactionHappen = (
  elementOne: ElementWithReactionBehavior,
  elementTwo: ElementWithReactionBehavior
): boolean => {
  if (
    !(
      elementOne.canFormMolecularCompound && elementTwo.canFormMolecularCompound
    )
  ) {
    return false;
  }

  return true;
};

const getIonicCharge = (atom: ElementToDraw): number => {
  const { valenceElectrons } = atom;
  const charge = valenceElectrons < 4 ? valenceElectrons : valenceElectrons - 8;
  return charge;
};

const getYOffsetBetweenAtoms = (radius: number): number => {
  return radius * 2 + 40;
};

// To balance charges, more than one of each element might need to be present
export const getAllAtomsInReaction = (
  firstAtom: ElementToDraw,
  secondAtom: ElementToDraw
) => {
  const firstAtomIonicCharge = getIonicCharge(firstAtom);
  const secondAtomIonicCharge = getIonicCharge(secondAtom);

  // Case of having a noble gas - nothing will react and we'll just show one of each atom attempting to react
  if (firstAtomIonicCharge === 0 || secondAtomIonicCharge === 0) {
    return [
      { ...firstAtom, ionicCharge: firstAtomIonicCharge },
      { ...secondAtom, ionicCharge: secondAtomIonicCharge }
    ];
  }
  const leastCommonMultiple =
    Math.abs(firstAtomIonicCharge) === Math.abs(secondAtomIonicCharge)
      ? firstAtomIonicCharge
      : firstAtomIonicCharge * secondAtomIonicCharge;

  const numberOfFirstAtomNeeded = Math.abs(
    leastCommonMultiple / firstAtomIonicCharge
  );
  const numberOfSecondAtomNeeded = Math.abs(
    leastCommonMultiple / secondAtomIonicCharge
  );

  const atomsOfFirstElement = _.times(numberOfFirstAtomNeeded, index => {
    return {
      ...firstAtom,
      yPos: firstAtom.yPos + index * getYOffsetBetweenAtoms(firstAtom.radius),
      ionicCharge: firstAtomIonicCharge
    };
  });

  const atomsOfSecondElement = _.times(numberOfSecondAtomNeeded, index => {
    return {
      ...secondAtom,
      yPos: secondAtom.yPos + index * getYOffsetBetweenAtoms(secondAtom.radius),
      ionicCharge: secondAtomIonicCharge
    };
  });

  return [...atomsOfFirstElement, ...atomsOfSecondElement];
};
