import en from "./en";

export function t(key: string) {
  let res: any;
  for (const k of key.split(".")) {
    if (res === undefined) {
      res = (en as Record<string, unknown>)[k];
    } else {
      res = res?.[k];
    }
  }
  return typeof res === "string" ? res : key;
}
