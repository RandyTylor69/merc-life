import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "./api";

export default function Login() {
  const [loginData, setLoginData] = React.useState({ email: "", password: "" });
  const location = useLocation();
  const navigate = useNavigate();
  const [err, setErr] = React.useState(null);
  const msg = location.state;


  function handleSubmit(e) {
    e.preventDefault();
    loginUser(loginData)
      .then((data) => {
        console.log(data);
        navigate("/host")
      })
      .catch((err) => {
        setErr(err);
        return;
      })
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col w-full h-fit justify-center items-center gap-6 max-w-[20rem]">
        {msg && <p className="text-gray-400">{msg} 😘</p>}
        <h1 className="text-3xl">Sign in to your account</h1>
        {err && <p className="text-gray-400">{err} 😢</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <input
            name="email"
            value={loginData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            className="border-b-4 focus:outline-hidden"
          />
          <input
            name="password"
            value={loginData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="border-b-4"
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    </main>
  );
}
