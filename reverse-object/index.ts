type ValueOf<T> = T[keyof T];

type ReverseObject<T extends Record<string, string>> = {
  [K in ValueOf<T>]: keyof {
    [P in keyof T as T[P] extends K ? P : never]: any;
  };
};

const testObject = {
  foo: "bar",
  baz: "lorem",
} as const;

type Test = ReverseObject<typeof testObject>;
// type:
// {
//    bar: 'foo';
//    lorem: 'baz';
// }
