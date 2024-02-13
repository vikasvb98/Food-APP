import mongoose, {Schema} from 'mongoose'
import  Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"


const userSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },

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

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}
userSchema.methods.genrateAccessToken = function () {
    return Jwt.sign(
        {
            _id: this._id,
            email: this.email,
            fullname: this.fullname,
            location:this.location
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.genrateRefreshToken = function () {
    return Jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model('User', userSchema)