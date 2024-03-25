const user = {
  username: "string",
  lastname: "string",
}

const {username, lastname} = user;

const arr = [1, 2, 3, 4, 5, 6];

const [element1, element2, element3, element4] = arr;

const register = () => {
  return {
    name: "username",
    required: true
  }
}

const props = {
  type: "text",
  ...register()
}




const obj: Record<string /* key */, string|number /* value */> = {};
const key = "username";
const value = "username";


obj[key] = value;

const key2 = "age";
const value2 = 17;

const obj3 = {
  age: 17,
  ["username"]: "username",
  ["u" + "sername"]: "user_name"
}

const obj1 = {
  ...obj,
  ["sdfj"]: value2
}






