import _ from "lodash";
import elements from "../sampleData/periodicTable";
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
  const groupedByPeriod = _.groupBy(elements, "xpos");
  console.log("groupedByPeriod", groupedByPeriod);

  return groupedByPeriod;
};
