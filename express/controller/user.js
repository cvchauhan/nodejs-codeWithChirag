const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JWT_SECRET_KEY;
const {
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  NO_RECORD,
  UPDATE_ERROR,
  DELETE_ERROR,
  INTERNAL_SERVER,
} = require("../common.json");

const signUp = async (req, res) => {
  try {
    const { password } = req.body;
    const hasPassword = await bcrypt.hash(password, 10);
    req.body.password = hasPassword;
    const data = new User(req.body);
    await data.save();
    res.send({ message: CREATE_USER });
  } catch (error) {
    res.status(INTERNAL_SERVER).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(400).send({ message: NO_RECORD });
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (isPasswordMatch) {
      const token = jwt.sign(user.toJSON(), jwtSecretKey, {
        algorithm: "HS256", // Specify the algorithm
        expiresIn: "1h", // Token expires in 1 hour
      });
      return res.send({ token });
    }
    return res.status(400).send({ messge: "Invalid Password" });
  } catch (error) {
    res.status(INTERNAL_SERVER).send(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users.length) return res.status(400).send({ message: NO_RECORD });
    return res.send(users);
  } catch (error) {
    res.status(INTERNAL_SERVER).send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await User.findById(id);
    if (!users) return res.status(400).send({ message: NO_RECORD });
    return res.send(users);
  } catch (error) {
    res.status(INTERNAL_SERVER).send(error.message);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.body.userId;
    const data = req.body;
    const users = await User.findByIdAndUpdate(id, data);
    if (!users) return res.status(400).send({ message: UPDATE_ERROR });
    return res.send({ message: UPDATE_USER });
  } catch (error) {
    res.status(INTERNAL_SERVER).send(error.message);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findByIdAndDelete(id);
    if (!users) return res.status(400).send({ message: DELETE_ERROR });
    return res.send({ message: DELETE_USER });
  } catch (error) {
    res.status(INTERNAL_SERVER).send(error.message);
  }
};

module.exports = {
  signUp,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  login,
};
