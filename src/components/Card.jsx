import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const FoodCard = () => {
  return (
    <div>
         <Card className="mt-6 w-96 overflow-hidden">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="card-image"/>
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Butter Chicken
                  </Typography>
                  <Typography>
                    The place is close to Barceloneta 
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <div>
                    <select>
                      {Array.from(Array(6), (e, i) => {
                        return(
                          <option key={i+1} value={i+1}> {i+1} </option>
                        )
                      })}
                    </select>
                    <select>
                      <option value="half">Half</option>
                      <option value="full">Full</option>
                    </select>
                    <div className=" inline ">
                      Item Price
                    </div>
                  </div>
                </CardFooter>
            </Card>
    </div>
  )
}

export default FoodCard