type NonMethodPropertiesSubType<T> = Omit<T, MethodPropertyNames<T>>

// Example

interface Part {
    id: number;
    name: string;
    subparts: Part[];
    updatePart(newName: string): void;
    removePart(): void;
}

type NonMethodPart = NonMethodPropertiesSubType<Part>;  // { id: number; name: string; subparts: Part[]; }