type User = {
  id: string;
  name: string;
};

function check<T>(obj: T): asserts obj is T & { checked: true } {
  (obj as T & { checked: boolean }).checked = true;
}

const user: User = {
  id: "1",
  name: "test",
};

check(user);

// should not throw error as now it has property checked
if (user.checked) {
  // do something
}
