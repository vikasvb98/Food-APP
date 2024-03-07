import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

  
const FoodCard = (props) => {
  let options = props.options;
  let priceOptions = Object.keys(options)
    return (
    <span>
         <Card className="mt-6 w-96 overflow-hidden">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img src= {props.imgSrc} alt="Food-image" className='object-cover h-56 w-96 '/>
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {props.name}
                  </Typography>
                  <Typography>
                    {props.desc} 
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
                      {
                        priceOptions.map((data) => (
                          <option key={data} value={data}>{data}</option>
                        ))
                      }
                    </select>
                    <div className=" inline ">
                      Item Price
                    </div>
                  </div>
                </CardFooter>
            </Card>
    </span>
  )
}

export default FoodCard