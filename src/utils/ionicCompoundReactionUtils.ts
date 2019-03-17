// Determine if elements can actually react
import { ElementWithReactionBehavior, Element } from "../types/element";
import _ from "lodash";
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
