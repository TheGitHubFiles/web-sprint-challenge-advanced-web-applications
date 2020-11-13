import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const initialValues = {
  username: '',
  password: ''
}


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [form, setForm] = useState(initialValues)
  const { push } = useHistory();

  const onChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", form)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        push("/bubble-page");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={onChange}
          placeholder="Enter Username"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Enter Password"
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
