const getVarValue = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(`--${name}`);

export const StyleUtils = { getVarValue };
