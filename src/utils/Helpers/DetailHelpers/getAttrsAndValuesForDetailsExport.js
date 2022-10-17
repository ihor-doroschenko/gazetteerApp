export function getAttrsAndValuesForDetailsExport(data) {
  let attributes = [];
  let values = [];
  for (let element of data) {
    attributes = [...attributes, element.attribute];
    values = [...values, element.value];
  }
  return [attributes, values];
}
