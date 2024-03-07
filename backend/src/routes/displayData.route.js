import { Router } from "express";
import connectDB from "../db/db.js";

const router = Router();

router.post('/foodData', async (req,res) => {
    try {
        const {foodItems , foodCategory} = await connectDB();
        const resposeData = {
            foodItems: foodItems,
            foodCategory: foodCategory
        };
        res.send(resposeData);
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error');
    }
})
export default router