import "index";

function isAvailable<Obj extends {}>(
  obj: Obj,
  key: string | number | symbol,
): key is keyof Obj {
  return key in obj;
}
