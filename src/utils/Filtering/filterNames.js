// Filter name of data type string by value of data type string. Note that this filter is based on includes array method (basically, containing required string and not exact equal) and is case insensetive

export const filterNames = (name1, name2) => {
  if (name1 !== undefined && name2 !== undefined) {
    return String(name2.toString().toLowerCase()).includes(name1.toString().toLowerCase());
  }
  return true;
};
