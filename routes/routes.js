const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const CategoryController = require('../controllers/categoryController');

//routes for user controller
router.post('/users', UserController.createUser);
router.get('/users', UserController.getUsers);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
router.post('/users/login', UserController.loginUserV2);


//for category routes

router.post('/category',CategoryController.createCategory);
router.get('/category', CategoryController.getAllCategory);
router.get('/category/:id', CategoryController.getByIdCategory);
router.put('/category/:id', CategoryController.updateCategory);
router.delete('/category/:id', CategoryController.deleteCategory);


module.exports = router;
