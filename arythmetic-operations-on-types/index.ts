type Plus<A extends number, B extends number> = [
  ...TNumber<A>,
  ...TNumber<B>,
]["length"];
type Minus<A extends number, B extends number> =
  TNumber<A> extends [...TNumber<B>, ...infer Rest] ? Rest["length"] : never;

type TNumber<N extends number, T extends any[] = []> = T["length"] extends N
  ? T
  : TNumber<N, [...T, any]>;

type Five = Plus<2, 3>;
type Four = Minus<5, 1>;
