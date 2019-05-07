import React, { useEffect } from "react";
import { useReactionState } from "../stateManagement/ReactionContext";
import { useFetchElementsByMaxAtomicNumber } from "../requests/periodicTable";
import { addElement } from "../ionicReactionBasic/IonicReactionBasicActions";
const MolecularReactionContainer = () => {
  const {
    selectedElement,
    addedElements,
    isReacting,
    completedReactions,
    dispatch
  } = useReactionState();

  const { isLoading, hasError, data } = useFetchElementsByMaxAtomicNumber(30);
  const hasSelectedMaxElements = addedElements.length === 2;

  if (isLoading) return <div>Loading ...</div>;
  if (hasError) return <div>Error! Data did not load</div>;

  return <div>Molecular Reactions</div>;
};

export default MolecularReactionContainer;
