// Get text for tooltip for the switch view tool

export const getSwitchViewTooltipText = ({ value, title }) => {
  return value ? `tt_${title.toLowerCase()}_switcher_on` : `tt_${title.toLowerCase()}_switcher_off`;
};
