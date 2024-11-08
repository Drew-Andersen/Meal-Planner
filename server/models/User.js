const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: trusted,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    }
);

// middleware to create password
userSchema.pre('save', async function(next){
    if(this.isNew || this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
});

//check for entered password matches the saved password
userSchema.methods.isCorrectPassword = async function(password){
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;