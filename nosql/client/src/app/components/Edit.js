import React from "react";

export default function Edit() {
  return (
    <div className="h-full p-3 flex flex-col justify-center items-center">
      <h1 className="font-bold">Edit Detials</h1>
      <div className="flex flex-col gap-3 w-52 pt-3">
        <input className="" placeholder="Name" />
        <input className="" placeholder="email" type="email" />
        <input className="" placeholder="password" type="password" />
        <div className="flex gap-3">
          <p className="whitespace-nowrap">Profile Image</p>
          <input type="file" />
        </div>
        <button className="border-2 border-white">SignUp</button>
      </div>
    </div>
  );
}
