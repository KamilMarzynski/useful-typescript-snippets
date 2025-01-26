// Key remapping in mapped types
type MapToPromise<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => Promise<T[K]>;
};

export interface User {
  id: number;
  name: string;
  email: string;
}

type AsyncUser = MapToPromise<User>;
// {
//   getId: () => Promise<number>;
//   getName: () => Promise<string>;
//   getEmail: () => Promise<string>;
// }
