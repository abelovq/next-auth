import { saveToLocalStorage } from "@/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const [value, setValue] = useState({ name: "", password: "" });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", value);
      const { headers } = res;
      saveToLocalStorage({
        "access-token": headers["access-token"],
        "refresh-token": headers["refresh-token"],
      });
      router.push("/");
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <h1 className="text-3xl m-5 font-bold underline">Login Form</h1>
      <form className="flex flex-col gap-2" onSubmit={handleLogin}>
        <input
          className="px-2 rounded"
          type="text"
          name="name"
          value={value.name}
          onChange={handleInputChange}
        />
        <input
          className="px-2 rounded"
          type="password"
          name="password"
          value={value.password}
          onChange={handleInputChange}
        />
        <button className="border-2 border-gray-400 rounded" type="submit">
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
