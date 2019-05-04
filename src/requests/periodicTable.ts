import _ from "lodash";
import elements from "../sampleData/periodicTable";
import elementReactivity from "../sampleData/elementReactivity";
import atomicRadiiHash from "../sampleData/atomicRadii";
import { getIonicCharge } from "../utils/ionicCompoundReactionUtils";
import { useEffect, useState } from "react";
import { Element } from "../types/element";

const periodicTableUrl =
  "https://s3.amazonaws.com/alliance-chemistry/periodicTable/periodicTable.json";

const atomicRadiiUrl =
  "https://s3.amazonaws.com/alliance-chemistry/periodicTable/atomicRadii.json";

const appendReactivityAndIonicCharge = (element: Element) => {
  return {
    ...element,
    // @ts-ignore - need to enum elements to make sure element symbol key exists in both elements data and reactivity of elements
    ...elementReactivity[element.symbol],
    ionicCharge: getIonicCharge(_.last(element.shells) || 0)
  };
};

// TODO: update atomicRadiiHash type to reflect data
const appendAtomicRadii = (element: Element, atomicRadiiHash: any) => ({
  ...element,
  radius:
    (atomicRadiiHash[element.symbol] &&
      atomicRadiiHash[element.symbol].atomicRadius) ||
    null
});

const fetchByColumn = async (
  apiState: any,
  setAPIState: any,
  maxAtomicNumber?: number
) => {
  setAPIState({
    ...apiState,
    isLoading: true
  });
  try {
    const [baseElementData, radiiData] = await Promise.all([
      fetch(periodicTableUrl),
      fetch(atomicRadiiUrl)
    ]);
    const baseData = await baseElementData.json();
    const atomicRadiiData = await radiiData.json();

    const elements = maxAtomicNumber
      ? baseData.elements.filter(
          (element: Element) => element.number <= maxAtomicNumber
        )
      : baseData.elements;

    const elementWithReactivityAndRadii = elements
      .map(appendReactivityAndIonicCharge)
      .map((element: Element) => appendAtomicRadii(element, atomicRadiiData));

    // For offline Testing
    // const elementsWithReactivity = elements.map(appendReactivityAndIonicCharge);
    // const elementWithReactivityAndRadii = elementsWithReactivity.map(element =>
    //   appendAtomicRadii(element, atomicRadiiHash)
    // );

    setAPIState({
      ...apiState,
      data: _.groupBy(elementWithReactivityAndRadii, "xpos"),
      isLoading: false
    });
  } catch (err) {
    console.log("error", err);
    setAPIState({
      ...apiState,
      data: {},
      isLoading: false,
      hasError: true
    });
  }
};

export const useFetchElementsByMaxAtomicNumber = (maxAtomicNumber?: number) => {
  const [apiState, setAPIState] = useState({
    isLoading: false,
    hasError: false,
    data: {}
  });
  useEffect(() => {
    fetchByColumn(apiState, setAPIState, maxAtomicNumber);
  }, []);

  return apiState;
};
