import axios from "axios";
import {useEffect, useState} from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

type Data = Record<string, string>

export default function App() {
  const [users, setUsers] = useState<Data[]>([]);
  const [posts, setPosts] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        // fetch
        // axios
        // super-agent
        const response = await axios.get(BASE_URL + '/users')
        setUsers(response.data);
      } catch (e) {
        console.error('get user: ', e);
      }

    }

    const getPosts = async () => {
      try {
        // fetch
        // axios
        // super-agent
        const response = await axios.get(BASE_URL + '/posts')
        setPosts(response.data);
      } catch (e) {
        console.error('get user: ', e);
      }


    }

    (async () => {
      setIsLoading(true);
      await getUsers();
      await getPosts();
      setIsLoading(false);
    })()

  }, []);

  return (
    <div style={{ display: "flex", gap: 2 }}>
      {isLoading && <h1>
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
