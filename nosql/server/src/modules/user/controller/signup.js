import signupUser from "../service/signup.js";

const loginController = async (req, res) => {
  try {
    await signupUser(req.body);
    // console.log(req);
    await res.status(201).send({
      req: req.body,
      status: 201,
      message: "User Created",
    });
  } catch (err) {
    if (err.code == 11000) {
      res.status(405).send({
        req: req.body,
        status: 405,
        message: "Email already exists.",
      });
    } else {
      res.status(500).send({
        req: req.body,
        status: 500,
        message: "User not created.",
      });
    }
  }
};

export default loginController;
