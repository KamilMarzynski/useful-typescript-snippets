import { DeepRemap } from "deep-remap/deep-remap";

type SetOptional<T, K extends keyof T> = DeepRemap<
  Partial<Pick<T, K>> & Omit<T, K>
>;
