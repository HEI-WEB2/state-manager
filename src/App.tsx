import z from "zod";
import {useForm} from "react-hook-form";
import './App.css'

const App = () => {
  const {register, handleSubmit} = useForm({
    defaultValues: {
      username: "",
      firstname: "",
      lastname: "",
    }
  })

  const submitData = (data: any) => {
    console.log('data', data);
  }

  // 'handleSubmit' is a middleware that handles validations and stuff
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div>
        <input type="text" {...register("username")} />
      </div>

      <div>
        <input type="text" {...register("lastname")} />
      </div>

      <div>
        <input type="text" {...register("firstname")} />
      </div>

      <button type="submit">submit</button>
    </form>
  )
} 

export default App

