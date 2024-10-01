import { MethodPropertyNames } from "./methodPropertyNames";

type MethodPropertiesSubType<T> = Pick<T, MethodPropertyNames<T>>;

// Example

interface Part {
  id: number;
  name: string;
  subparts: Part[];
  updatePart(newName: string): void;
  removePart(): void;
}

type PartMethods = MethodPropertiesSubType<Part>; // { updatePart(newName: string): void; removePart(): void; }

