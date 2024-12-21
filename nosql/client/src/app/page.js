import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Edit from "./components/Edit";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <h1 className="h-10">NoSQL - MongoDB</h1>
      <div className="flex justify-center items-center">
        <div className="border-r-[0.5px] w-[50%] section flex flex-col">
          <hr />
          <Signup />
          <hr />
          <Signin />
        </div>
        <div className="border-l-[0.5px] w-[50%] section flex flex-col">
          <hr />
          <Edit />
          <hr />
          <Card />
        </div>
      </div>
    </div>
  );
}
