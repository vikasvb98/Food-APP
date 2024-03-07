import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`)

        // const foodData = await mongoose.connection.db.collection("food-items")
        // const foodItems = await foodData.find({}).toArray()
        // console.log("Food Items: ", foodItems)
        // global.foodItems = foodItems

         const foodData = await mongoose.connection.db.collection("food-items")
          const data = await foodData.find({}).toArray();
          {
            const foodCategory = await mongoose.connection.db.collection("food-category")
            const catData = await foodCategory.find({}).toArray();

            return { foodItems: data , foodCategory: catData };
        }
        
        
    } catch (error) {
        console.log("MONGODB connection error ", error);
        throw error;
    }
}

export default connectDB