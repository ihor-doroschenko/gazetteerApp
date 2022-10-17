import classNames from 'classnames';

export const addNoShadow = (ModuleClass, isSatellite) => {
  return classNames(ModuleClass, { noShadow: isSatellite });
};
