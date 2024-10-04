// type Extract<T, U> = T extends U ? T : never;
//
//type Shape =
//   | { kind: "circle"; radius: number }
//   | { kind: "square"; x: number }
//   | { kind: "triangle"; x: number; y: number };
//
// type T2 = Extract<Shape, { kind: "circle" }>
//
// type T2 = {
//     kind: "circle";
//     radius: number;
// }

type Group<
  Collection extends Record<string, any>,
  Selector extends keyof Collection,
> = {
  [K in Collection[Selector]]: Extract<Collection, { [P in Selector]: K }>[];
};

// K will be values of Selector.
// Collection has to be union. In Typescript you can iterate over union
// from below example -> Post['type'] = 'story' | 'short' // Colection[Selector]
// K in Post['type'] -> for every value of this
// extract from collection -> Extract<Post, { [P in 'type']: K }
// eg Extract<Post,{ P [P in 'type']: 'story'}> -> PostStory
// again iterate over values of Selector and extract from Collection (Post union) the one Post type which has type: value_of_current_iteratoin_of_K

type PostBase = {
  id: string;
  authorId: string;
};

type PostStory = PostBase & {
  type: "story";
  description: string;
};

type PostShort = PostBase & {
  type: "short";
  foo: "bar";
};

type Post = PostStory | PostShort;

/**
 * {
 *   story: PostStory[];
 *   short: PostShort[];
 * }
 */
type GroupedPosts = Group<Post, "type">;
