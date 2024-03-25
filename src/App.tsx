import {useForm, SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import z from "zod";
import './App.css'

const userSchema = z.object({
  username: z.string().min(1).max(20),
  age: z.number().gt(1).lt(500),
  email: z.string().email(),
});

type UserSchema = z.infer<typeof userSchema>;

const App = () => {
  const {register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      username: "",
      age: 17,
      email: "example@gmail.com"
    },
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserSchema> = (data) => {
    console.log('data', data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("username")} />
        <div>{errors.username?.message}</div>
      </div>

      <div>
        <input type="number" {...register("age")} />
        <div>{errors.age?.message}</div>
      </div>

      <div>
        <input type="email" {...register("email")} />
        <div>{errors.email?.message}</div>
      </div>

      <button type="submit">submit</button>
    </form>
  );
} 

export default App

