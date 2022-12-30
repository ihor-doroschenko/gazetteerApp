// Selector to get a detail entity by id

export const getDetailById = (entities, id) => {
  for (let value of Object.values(entities)) {
    for (let el of value) {
      if (el.id === id) {
        return el;
      }
    }
  }
};
