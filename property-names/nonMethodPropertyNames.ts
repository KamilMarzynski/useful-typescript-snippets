type NonMethodPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any) => any ? never : K }[keyof T];

// Example

interface Part {
    id: number;
    name: string;
    subparts: Part[];
    updatePart(newName: string): void;
    removePart(): void;
}

type PartNonMethodPropertyNames = NonMethodPropertyNames<Part>;  // "id" | "name" | "subparts"