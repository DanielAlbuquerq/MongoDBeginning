import mongoose from 'mongoose';
const {Schema, model} = mongoose;


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        minLenght: 10,
        required: true,
        lowercase: true
    },    
});

const User = model('User', userSchema);
export default User;












