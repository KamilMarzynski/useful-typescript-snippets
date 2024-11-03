type Circle = {
  radius: number;
  kind: "circle";
};
type Square = {
  x: number;
  kind: "square";
};
type Triangle = {
  x: number;
  y: number;
  kind: "triangle";
};

type Shape = Circle | Square | Triangle;

function assertNever(value: never) {
  console.error("Unknown value", value);
  throw Error("Not possible");
}

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle": // shape is Circle
      return Math.PI * shape.radius * shape.radius;
    case "triangle": // shape is Triangle
      return (shape.x * shape.y) / 2;
    case "square": // shape is Square
      return shape.x * shape.x;
    default: // shape is never
      assertNever(shape); // shape can be passed to assertNever!
  }
}
