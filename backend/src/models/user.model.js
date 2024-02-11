import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
    fullname:{
    type:String,
    required:true},

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is Required']
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default:Date.now
    }
})

export const User = mongoose.model('User', userSchema)