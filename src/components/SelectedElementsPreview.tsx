import React from "react";
import { setIsReacting } from "../ionicReactionBasic/IonicReactionBasicActions";

const SelectedElementsPreview = ({
  addedElements,
  removeElement,
  hasSelectedMaxElements,
  dispatch
}: any) => {
  console.log("react", React);
  return (
    <div id="ElementsPreview">
      {addedElements.length === 0 ? (
        <h1>No Elements Selected</h1>
      ) : (
        <h1>Selected Elements</h1>
      )}
      {addedElements.map((element: any, index: number) => {
        return (
          <div key={element.name + index}>
            <p>{element.name}</p>
            <p>{element.symbol}</p>
            <button
              onClick={() => {
                removeElement(element);
              }}
            >
              X
            </button>
          </div>
        );
      })}
      {hasSelectedMaxElements && (
        <button
          onClick={() => {
            dispatch(setIsReacting(true));
          }}
        >
          Mix Atoms
        </button>
      )}
    </div>
  );
};

export default SelectedElementsPreview;
