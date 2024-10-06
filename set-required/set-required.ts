import { DeepRemap } from "deep-remap/deep-remap";

type SetRequired<T, K extends keyof T = keyof T> = DeepRemap<
  Required<Pick<T, K>> & Omit<T, K>
>;
