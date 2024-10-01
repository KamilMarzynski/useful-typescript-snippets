// TODO: move each example to separate file

// Basics

type State = {
  name: string;
  age: number;
};

type Setters = {
  [K in keyof State]: (value: State[K]) => void;
};

const setters: Setters = {
  name: (value: string) => console.log(value),
  age: (value: number) => console.log(value),
};

// Using template string literal types

type SetProperty<K extends string> = `set${Capitalize<K>}`;
type ExampleName = SetProperty<"name">; // "setName"

// Using `as` clauses

type Setters2 = {
  [K in keyof State as `set${Capitalize<K>}`]: (value: State[K]) => void;
};

const setters2: Setters2 = {
  setName: (value: string) => console.log(value),
  setAge: (value: number) => console.log(value),
};

// Generic types

type Setters3<State> = {
  [K in keyof State as `set${Capitalize<K>}`]: (value: State[K]) => void;
}; // this will throw error as 'K' does not satisfy the constraint 'string'.

// to fix this problem we need to use intersection of State & string

type Setters4<State> = {
  [K in keyof State & string as `set${Capitalize<K>}`]: (
    value: State[K],
  ) => void;
};

type Getters<State> = {
  [K in keyof State & string as `get${Capitalize<K>}`]: () => State[K];
};

type Store<State> = Setters4<State> & Getters<State>;

type PersonState = {
  name: string;
  age: number;
};

type PersonStore = Store<PersonState>;

declare const personStore: PersonStore;
personStore.setName("Kamil");
personStore.setAge(26);
const name1: string = personStore.getName();

