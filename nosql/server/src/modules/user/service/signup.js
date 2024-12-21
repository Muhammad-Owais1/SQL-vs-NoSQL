import bcrypt from "bcrypt";
import addData from "../db/signup.js";

const signupUser = async (userData) => {
  const password = bcrypt.hashSync(userData.password, 10);

  userData.password = password;

  return await addData(userData);
};

export default signupUser;
