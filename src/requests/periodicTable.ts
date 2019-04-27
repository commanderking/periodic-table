import _ from "lodash";
import elements from "../sampleData/periodicTable";
import elementReactivity from "../sampleData/elementReactivity";
import atomicRadiiHash from "../sampleData/atomicRadii";
import { getIonicCharge } from "../utils/ionicCompoundReactionUtils";
import { useEffect, useState } from "react";

const periodicTableUrl =
  "https://s3.amazonaws.com/alliance-chemistry/periodicTable/periodicTable.json";

const appendReactivityAndIonicCharge = (element: any) => {
  return {
    ...element,
    // @ts-ignore - need to enum elements to make sure element symbol key exists in both elements data and reactivity of elements
    ...elementReactivity[element.symbol],
    ionicCharge: getIonicCharge(_.last(element.shells) || 0)
  };
};

// TODO: update atomicRadiiHash to reflect data
const appendAtomicRadii = (element: any, atomicRadiiHash: any) => ({
  ...element,
  radius: atomicRadiiHash[element.symbol].atomicRadius || null
});

const fetchByColumn = async (apiState: any, setAPIState: any) => {
  setAPIState({
    ...apiState,
    isLoading: true
  });
  try {
    // const response = await fetch(periodicTableUrl);
    // const data = await response.json();

    // const elementsWithReactivity = data.elements.map(
    //   appendReactivityAndIonicCharge
    // );

    // For offline Testing
    const elementsWithReactivity = elements.map(appendReactivityAndIonicCharge);
    const elementWithReactivityAndRadii = elementsWithReactivity.map(element =>
      appendAtomicRadii(element, atomicRadiiHash)
    );

    setAPIState({
      ...apiState,
      data: _.groupBy(elementWithReactivityAndRadii, "xpos"),
      isLoading: false
    });

    // For offline testing
    // return elements;
  } catch (err) {
    setAPIState({
      ...apiState,
      data: {},
      isLoading: false,
      hasError: true
    });
  }
};

export const useFetchPeriodicTableByColumn = () => {
  const [apiState, setAPIState] = useState({
    isLoading: false,
    hasError: false,
    data: {}
  });
  useEffect(() => {
    fetchByColumn(apiState, setAPIState);
  }, []);

  const { isLoading, hasError, data } = apiState;
  return { isLoading, hasError, data };
};
