const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    // Create a user, sign a token, and send it back to the client
    async createUser({ body }, res) {
        try {
            // Log the body to debug the data being received
            console.log('User creation data:', body);

            // Create a new user
            const user = await User.create(body);

            // If user creation fails, return a 400 response
            if (!user) {
                return res.status(400).json({ message: 'Something went wrong during user creation.' });
            }

            // Create a token for the new user
            const token = signToken(user);
            console.log('User created:', user);
            console.log('Generated token:', token);

            // Return the token and user data
            res.json({ token, user });
        } catch (err) {
            console.error('Error creating user:', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    // Get a single user by either their id or their name
    async getSingleUser({ user = null, params }, res) {
        try {
            // Find the user by either their _id or name
            const foundUser = await User.findOne({
                $or: [{ _id: user ? user._id : params.id }, { name: params.name }],
            });
    
            if (!foundUser) {
                return res.status(400).json({ message: 'Cannot find a user with this id!' });
            }
    
            res.json(foundUser);
        } catch (err) {
            console.error('Error fetching user:', err);
            res.status(500).json({ message: 'Error fetching user' });
        }
    },

    // Login a user, sign a token, and send it back to the client
    async login({ body }, res) {
        try {
            // Look for the user by either their name or email
            const user = await User.findOne({
                $or: [{ name: body.name }, { email: body.email }]
            });

            // If no user found, return a 400 response
            if (!user) {
                return res.status(400).json({ message: "Can't find this user" });
            }

            // Check if the password is correct
            const correctPw = await user.isCorrectPassword(body.password);
            if (!correctPw) {
                return res.status(400).json({ message: 'Wrong password' });
            }

            // Create a token for the user
            const token = signToken(user);

            // Return the token and user data
            res.json({ token, user });
        } catch (err) {
            console.error('Error logging in:', err);
            res.status(500).json({ message: 'Login error' });
        }
    },

    // Get all users
    async getUsers(req, res) {
        try {
            // Find all users
            const foundUsers = await User.find();

            // If no users found, return a 400 response
            if (!foundUsers || foundUsers.length === 0) {
                return res.status(400).json({ message: 'No users found' });
            }

            // Return the list of users
            res.json(foundUsers);
        } catch (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ message: 'Error fetching users' });
        }
    },

    // Remove a user
    async removeUser(req, res) {
        try {
            // Attempt to find and remove the user by their ID
            const user = await User.findOneAndRemove({ _id: req.params.userId });

            // If no user found, return a 404 response
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }

            // Return success message
            res.json({ message: 'User successfully deleted!' });
        } catch (err) {
            console.error('Error deleting user:', err);
            res.status(500).json({ message: 'Error deleting user' });
        }
    },

    // Update the entries
    async putEntries(req, res) {
        try {
            // Find the user based on the ID from the JWT token
            const user = await User.findById(req.user._id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            // Log the current entries before incrementing
            console.log('Current entries:', user.entries);  // returning undefined
    
            // Initialize entries if not present
            user.entries = user.entries || 0;  // Ensure it's not null or undefined
    
            // Increment entries by 1
            user.entries++;
    
            // Log after incrementing
            console.log('Updated entries:', user.entries);  // Log after update
    
            // Save the updated user
            await user.save();
    
            // Send back the updated user object
            res.json({ entries: user.entries });
        } catch (err) {
            console.error('Error updating entries:', err);
            res.status(500).json({ message: 'Failed to update entries' });
        }
    }
};