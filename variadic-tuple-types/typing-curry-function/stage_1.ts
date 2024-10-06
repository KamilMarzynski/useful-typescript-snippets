import "index";

type Curried<F> = F extends (...args: infer A) => infer R
  ? // very important here! arguments of function in typescrypt are typles.
    // A is tupple of function arguments and here we check if there are any arguments left infering first argument and using spread operator to have rest of them stored in L
    A extends [infer F, ...infer L]
    ? L extends []
      ? (a: F) => R
      : (a: F) => Curried<(...args: L) => R>
    : () => R
  : never;

function curry<F extends Function>(fn: F): Curried<F> {
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
  return curried as Curried<F>;
}

function add(x: number, y: number): number {
  return x + y;
}

// type here is (a: number) => (a: number) => number
const addCurry = curry(add);

const addTwo = addCurry(2);

console.log(addTwo(3));
