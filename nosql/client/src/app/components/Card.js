import React from "react";

export default function Card() {
  return (
    <div className="h-full p-3 flex flex-col justify-center items-center">
      <div className="border-[1px] border-white rounded-lg h-full w-full flex">
        <div className="w-[30%] border-r-[1px] border-white flex justify-center items-center">
          <div className="bg-white h-20 w-20 overflow-hidden">
            {/* <Image width="80px" src="#" alt="Image" /> */}
          </div>
        </div>
        <div className="w-[70%] flex flex-col justify-center items-start p-3">
          <div className="flex gap-3">
            <p>Name:</p>
          </div>
          <div className="flex gap-3">
            <p>Email:</p>
          </div>
        </div>
      </div>
    </div>
  );
}
