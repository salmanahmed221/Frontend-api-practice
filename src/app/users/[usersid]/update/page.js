"use client";
import { useEffect, useState } from "react";
export default function Page({ params }) {
  let common = params.usersid;
  console.log(common);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    let data = await fetch(`http://localhost:3000/users/${common}`);
    console.log(data);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };
  const updateUsers = async () => {
    let result = await fetch(
      `http://localhost:3000/api/getapistatic/${common}`,
      {
        method: "PUT",
        body: JSON.stringify({ name, age, email }),
      }
    );
    result = await result.json();
    console.log(result);
  };
  return (
    <div>
      <h1>Update Page</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Name:"
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        value={age}
        placeholder="Enter Age:"
        onChange={(e) => setAge(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        value={email}
        placeholder="Enter Email:"
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <button onClick={updateUsers}>Update User</button>
    </div>
  );
}
