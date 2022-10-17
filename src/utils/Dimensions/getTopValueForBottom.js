export function getTopValueForBottom(AreValueAndMatchingsTrue, isMatchingTableHidden) {
  if (AreValueAndMatchingsTrue && !isMatchingTableHidden) {
    return 0;
  }
  if (AreValueAndMatchingsTrue && isMatchingTableHidden) {
    return 100;
  }
  return 0;
}
