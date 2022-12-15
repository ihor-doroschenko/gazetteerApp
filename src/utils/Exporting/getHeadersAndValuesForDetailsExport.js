// Get headers and values to export data from the detail view

export function getHeadersAndValuesForDetailsExport(data) {
  let attributes = [];
  let values = [];
  for (let element of data) {
    attributes = [...attributes, element.attribute];
    values = [...values, element.value];
  }
  return [attributes, values];
}
