function concat<T extends unknown[], U extends unknown[]>(
  arr1: [...T],
  arr2: [...U],
): [...T, ...U] {
  return [...arr1, ...arr2];
}

// It's type is [number, number, number, number, number, string]
const test = concat([1, 2, 3], [6, 7, "a"]);
