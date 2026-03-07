const router = require("express").Router();
const {
  getUsers,
  signUp,
  getUserById,
  updateUserById,
  deleteUserById,
  login,
} = require("../controller/user");
const authenticateToken = require("../middleware/auth");

router.get("/getall", authenticateToken, getUsers);
router.post("/signup", signUp);
router.post("/login", login);
router.get("/:id", authenticateToken, getUserById);
router.patch("/update", authenticateToken, updateUserById);
router.delete("/delete/:id", authenticateToken, deleteUserById);

module.exports = router;
