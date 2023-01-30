import { DATA } from "../data";

export function getData() {
  const DataList = DATA;
  return DataList;
}

export function filterData(dataType) {
  let filtredData = getData().filter(type => type.type === dataType);
  return filtredData;
}