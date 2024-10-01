export type MethodPropertyNames<T> = {
  [K in keyof T]: T[K] extends (...args: any) => any ? K : never;
}[keyof T];

// Example
interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
  removePart(): void;
}

type PartMethodPropertyNames = MethodPropertyNames<Part>; // "updatePart" | "removePart"

