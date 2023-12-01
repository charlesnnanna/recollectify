import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PostMessage' }],
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const User = mongoose.model('User', userSchema);

export default User;