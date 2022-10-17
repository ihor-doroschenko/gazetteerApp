export function getStatusIsFinished(status) {
  const statusIsFinished =
    Object.keys(status).length !== 0 &&
    Object.keys(status).every(key => status[key] !== 'isFetching');
  return statusIsFinished;
}
