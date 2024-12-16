const UserModel = require('../models/UserModel');
const AdminModel = require('../models/AdminModel');

const authController = {
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const admin = await AdminModel.findOne({ email: email, password: password });
            if (admin) {
                return res.status(200).json({
                    success: true,
                    userType: "admin",
                    id: admin._id,
                    username: admin.username
                });
            }

            const user = await UserModel.findOne({ email: email, password: password });
            if (user) {
                return res.status(200).json({
                    success: true,
                    userType: "user",
                    id: user._id, 
                    username: user.username
                });
            }

            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        } catch (error) {
            console.error("Error during login:", error);
            return res.status(500).json({
                success: false,
                message: "An error occurred while processing the login"
            });
        }
    },

    choose_role: async (req, res) => {
        const { id, role } = req.body;

        try {
            const updateUser = await UserModel.findOneAndUpdate(
                { _id: id },          
                { $set: { role: role } }, 
                { new: true }            
            );

            if (updateUser) {
                return res.status(200).json({
                    success: true,
                    message: "Role updated successfully",
                    updatedUser: updateUser
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "User not found or role unchanged"
                });
            }
        } catch (error) {
            console.error("Error during role update:", error);
            return res.status(500).json({
                success: false,
                message: "An error occurred while updating the role"
            });
        }
    },
};

module.exports = authController;
