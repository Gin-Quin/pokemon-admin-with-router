export function extractNumberFromParam(param: string | string[]): number {
  if (Array.isArray(param)) return NaN;
  return parseInt(param);
}
