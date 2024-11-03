import "index";

/*
 * curry function allows to pass an arbitrary number of arguments. We want to make the same for Curried type
 */

type Overloads<A extends any[]> = A extends [infer A, ...infer L]
  ? [A] | [A, ...Overloads<L>] | []
  : [];

// type Overloaded = [] | [string, number, string] | [string] | [string, number];
type Overloaded = Overloads<[string, number, string]>;

type Remove<T extends any[], U extends any[]> = U extends [infer _, ...infer UL]
  ? T extends [infer _, ...infer TL]
    ? Remove<TL, UL>
    : never
  : T;

type Removed = Remove<[string, number, string], [number, string]>; // type Removed =  [ string ]

type Curried<A extends any[], R extends any> = A extends [infer F, ...infer L]
  ? <K extends Overloads<L>>(arg: F, ...args: K) => Curried<Remove<L, K>, R>
  : R;

function curry<A extends any[], R extends any>(
  fn: (...args: A) => R,
): Curried<A, R> {
  let curried: Function = (...args: any) => {
    // if you haven't collected enough arguments
    if (fn.length !== args.length) {
      // partially apply arguments and
      // return the collector function
      return curried.bind(null, ...args);
    }
    // otherwise call all functions
    return fn(...args);
  };
  return curried as Curried<A, R>;
}

function add(x: number, y: number): number {
  return x + y;
}

const addCurry = curry(add);

const addTwo = addCurry(2);

console.log(addTwo(3));
