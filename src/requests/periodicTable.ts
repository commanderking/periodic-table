import _ from "lodash";
import elements from "../sampleData/periodicTable";
import elementReactivity from "../sampleData/elementReactivity";
import { getIonicCharge } from "../utils/ionicCompoundReactionUtils";

const periodicTableUrl =
  "https://s3.amazonaws.com/alliance-chemistry/periodicTable/periodicTable.json";

const fetchPeriodicTableData = async () => {
  try {
    // const response = await fetch(periodicTableUrl);
    // const data = await response.json();
    // return data.elements;

    // For offline testing
    return elements;
  } catch (err) {
    console.log("error", err);
  }
};

export const fetchPeriodicTableDataGroupedByColumn = async () => {
  const elements = await fetchPeriodicTableData();

  // add data about reactivity to each element
  if (elements) {
    const elementsWithReactivity = elements.map(element => {
      return {
        ...element,
        // @ts-ignore - need to enum elements to make sure element symbol key exists in both elements data and reactivity of elements
        ...elementReactivity[element.symbol],
        ionicCharge: getIonicCharge(_.last(element.shells) || 0)
      };
    });

    const groupedByPeriod = _.groupBy(elementsWithReactivity, "xpos");
    return groupedByPeriod;
  }

  return {};
};
