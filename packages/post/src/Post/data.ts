import { Post } from "./Post";

const posts: Post[] = [
  createPost({
    id: '12345',
    name: 'accounts',
    createdById: '1',
  }),
  createPost({
    id: '23456',
    name: 'opps',
    createdById: '2',
  })
]

function createPost(post: Partial<Post>): Post {
    return Object.assign(new Post(), post)
}


export { posts as postData }