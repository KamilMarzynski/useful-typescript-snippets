declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
export type Branded<T, B> = T & Brand<B>;

// example

type UserId = Branded<string, "UserId">;
type PostId = Branded<string, "PostId">;

const createUserId = (id: string) => id as UserId;
const createPostId = (id: string) => id as PostId;

const userId = createUserId("123");
const postId = createPostId("123");

if (userId === postId) {
  // This comparison appears to be unintentional because the types 'UserId' and 'PostId' have no overlap.
  console.log("same");
}

const findUser = (id: UserId) => {};

findUser(postId); // Argument of type 'PostId' is not assignable to parameter of type 'UserId'.

