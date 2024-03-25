import { useDeleteUser, useGetPosts, useGetUsers } from "./hooks";

export default function App() {
  const {users, isFetching} = useGetUsers();
  const deleteMutation = useDeleteUser();
  

  return (
    <>
      {isFetching && <h1>
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
      <button
        onClick={() => {
          deleteMutation.mutate();
        }}
      >
        {deleteMutation.isPending ? 'mutating...' : 'mutate'}
      </button>
    </>
  )
}
