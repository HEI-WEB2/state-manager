import { useGetPosts, useGetUsers } from "./hooks";

export default function App() {
  const {posts, isFetching: isFetchingPosts} = useGetPosts();
  const {users, isFetching: isFetchingUsers} = useGetUsers();

  return (
    <div style={{ display: "flex", gap: 2 }}>
      {isFetchingUsers || isFetchingPosts && <h1>
        loading...
      </h1>}

      <div>
        <h1>users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
       </div>

      <div>
        <h1>posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
       </div>
    </div>
  )
}
