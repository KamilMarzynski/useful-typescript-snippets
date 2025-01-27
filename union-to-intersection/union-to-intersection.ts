type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;

type Intersection = UnionToIntersection<{ foo: "bar" } | { baz: "bar" }>;
// { foo: "bar" } & { baz: "bar"}
