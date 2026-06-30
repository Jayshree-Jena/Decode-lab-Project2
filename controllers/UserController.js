const User = require('../models/User');
const jwt = require('jsonwebtoken');

const UserController = {
 
  createUser: async (req, res) => {
    try {
      const { name, email, age } = req.body;

      if (!name || !email) {
        return res.status(400).json({
          status: 400,
          message: "Name and email are required",
          data: null
        });
      }

      const newUser = await User.create({ name, email, age });

      return res.status(201).json({
        status: 201,
        message: "User created successfully",
        data: newUser
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message,
        data: null
      });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json({
        status: 200,
        message: "Users data fetched successfully",
        data: users
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message,
        data: null
      });
    }
  },

 
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

      if (!updatedUser) {
        return res.status(404).json({ status: 404, message: "User not found" });
      }

      return res.status(200).json({
        status: 200,
        message: "data updated successfully",
        data: updatedUser
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message,
        data: null
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
        return res.status(404).json({ status: 404, message: "User not found" });
      }

      return res.status(200).json({
        status: 200,
        message: "data deleted successfully"
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message,
        data: null
      });
    }
  },


  loginUserV2: async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          status: 400,
          message: "Email is required",
          data: null
        });
      }

      const userData = await User.findOne({ email });
      if (!userData) {
        return res.status(404).json({
          status: 404,
          message: "User not found",
          data: null
        });
      }
      console.log("JWT_SECRET:", process.env.JWT_SECRET);
      const token = jwt.sign(
        { id: userData._id, email: userData.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );

      return res.status(200).json({
        status: 200,
        message: "User login successful",
        token: token,
        data: {
          name: userData.name,
          email: userData.email,
          age: userData.age
        }
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message,
        data: null
      });
    }
  }
};

module.exports = UserController;
