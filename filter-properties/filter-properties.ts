type FilterProperties<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};

interface Mixed {
  name: string;
  age: number;
  isActive: boolean;
  email: string;
}

type StringProperties = FilterProperties<Mixed, string>;
