import { useState } from 'react';
import './App.css'

const App = () => {
  const [values, setValues] = useState({
    username: "",
    age: 17,
  });

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const {name: field, value} = ev.target;
    setValues(prev => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <form>
      <div>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          name="age"
          value={values.age}
          onChange={handleChange}
        />
      </div>
    </form>
  );
} 

export default App

