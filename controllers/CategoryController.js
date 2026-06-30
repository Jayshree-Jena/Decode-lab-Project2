const Category = require('../models/Category');

const CategoryController = {
    createCategory: async (req, res) => {
        try {
            const { name, description } = req.body;

            if (description === "" || !name) {
                return res.status(400).json({
                    status: 400,
                    message: "Category name and description are required",
                    data: null
                });
            }

            const newCategory = await Category.create({ name, description });
            return res.status(201).json({
                status: 201,
                message: "Category created successfully!",
                data: newCategory
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message,
                data: null
            });
        }
    },

    getAllCategory: async (req, res) => {
        try {
            const allData = await Category.find();
            return res.status(200).json({
                status: 200,
                message: "All data fetched successfully!",
                data: allData
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message,
                data: null
            });
        }
    },

    getByIdCategory: async (req, res) => {
        try {
            const id = req.params.id;
            const singleData = await Category.findById(id);

            if (!singleData) {
                return res.status(404).json({
                    status: 404,
                    message: "Category not available",
                    data: null
                });
            }

            return res.status(200).json({
                status: 200,
                message: "Category fetched successfully!",
                data: singleData
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message,
                data: null
            });
        }
    },

    updateCategory: async (req, res) => {
        try {
            const id = req.params.id;
            const { name, description } = req.body;

            if (description === "" || !name) {
                return res.status(400).json({
                    status: 400,
                    message: "Category name and description are required",
                    data: null
                });
            }

            const updatedCategory = await Category.findByIdAndUpdate(
                id,
                { name, description },
                { new: true }
            );

            if (!updatedCategory) {
                return res.status(404).json({
                    status: 404,
                    message: "Category not Available",
                    data: null
                });
            }

            return res.status(200).json({
                status: 200,
                message: "Category updated successfully!",
                data: updatedCategory
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message,
                data: null
            });
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedCategory = await Category.findByIdAndDelete(id);

            if (!deletedCategory) {
                return res.status(404).json({
                    status: 404,
                    message: "Category not Available",
                    data: null
                });
            }

            return res.status(200).json({
                status: 200,
                message: "deleted successfully!",
                data: deletedCategory
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

module.exports = CategoryController;
