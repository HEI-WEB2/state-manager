import {useState} from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import './App.css'

interface UserSchema {
  username: string;
  age: number;
}

const App = () => {
  const {register, handleSubmit} = useForm<UserSchema>({
    defaultValues: {
      username: "",
      age: 17,
      email: "example@gmail.com"
    }
  });

  const onSubmit: SubmitHandler = (data) => {
    const {username, age} = data;
    if (
      username &&
      username.length > 0 &&
      username.length < 20 &&
    ) {
    }

    if (age && age > 0 && age < 500) {
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("username")} />
      </div>

      <div>
        <input {...register("age")} />
      </div>

      <div>
        <input {...register("email")} />
      </div>

      <button type="submit">submit</button>
    </form>
  );
} 

export default App

