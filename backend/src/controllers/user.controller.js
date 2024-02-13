import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler( async(req, res) => {
    
    const {email, fullname, location, password,date} = req.body

    if (
        [email, fullname, location, password,date].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All Fields are required")
    }
    const existedUser = await User.findOne({ email })
    if (existedUser) {
        throw new ApiError (409, "User with email already exists")
    }
    const user = await User.create({
        fullname,
        email,
        password,
        location,
        date
    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createdUser) {
        throw new ApiError(500, "something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully ")
    )
})

const loginUser = asyncHandler( async(req, res) => {


    const {email, password, location} = req.body


    const genrateAccessAndRefershToken = async (userId) => {
        try {
            const user = await User.findById(userId)
            const accessToken = user.genrateAccessToken()
            const refreshToken = user.genrateRefreshToken()

            user.refreshToken = refreshToken
            await user.save({ validateBeforeSave: false })

            return { accessToken, refreshToken }
        } catch (error) {
            throw new ApiError(500, "Something went wrong while genrating Access and Refresh Token")
        }
    }

    if (!email || !password) {
        throw new ApiError(400, "Email and password are required.");
    }

    const user = await  User.findOne({email})
    if(!user) {
        throw new ApiError(404, "User does not exist.")
    }
    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid) {
        throw new ApiError(401, "Incorrect Password")
    }
    const { accessToken, refreshToken } = await genrateAccessAndRefershToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(200, {
            user: loggedInUser, accessToken, refreshToken
        }, 
        " User Logged In Succesfully ")
    )
})

export {registerUser, loginUser}