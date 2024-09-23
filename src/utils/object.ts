export const hasTruthyProperties = <T extends object>(obj: T): boolean =>
  Object.values(obj).some((prop) => !!prop);
