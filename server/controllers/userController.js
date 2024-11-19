// import user model
const { User } = require('../models/User')
//import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
    async getSingleUser({ user = null, params }, res){
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        })

        if(!foundUser){
            return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }

        res.json(foundUser);
    },

    async getUsers(req,res){
        const foundUsers = await User.find();

        if(!foundUsers){
            return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }

        res.json(foundUsers);
    },

    //create a user, sign a token, and send it back to client-side

}