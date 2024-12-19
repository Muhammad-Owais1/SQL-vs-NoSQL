import React from "react";

export default function Signin() {
  return (
    <div className="h-full p-3 flex flex-col justify-center items-center">
      <h1 className="font-bold">SignIn</h1>
      <div className="flex flex-col gap-3 w-52 pt-3">
        <input className="" placeholder="email" type="email" />
        <input className="" placeholder="password" type="password" />
        <button className="border-2 border-white">SignIn</button>
      </div>
    </div>
  );
}
