import Model from "../models/index.js";

const addData = async (userData) => {
  try {
    return await Model(userData).save();
  } catch (err) {
    console.log(err);
  }
};

export default addData;
