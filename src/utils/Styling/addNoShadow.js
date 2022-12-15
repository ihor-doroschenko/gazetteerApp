import classNames from 'classnames';

// Add noShadow class for elements if the map is in satellite view to improve user experience

export const addNoShadow = (ModuleClass, isSatellite) => {
  return classNames(ModuleClass, { noShadow: isSatellite });
};
