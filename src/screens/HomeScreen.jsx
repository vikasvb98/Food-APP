import StickyNavbar from "../components/Navbar";
import FooterWithSocialLinks from "../components/Footer";
import FoodCard from "../components/Card";
import { Carousel } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [search, setSearch] = useState(' ')
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const foodData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/foodData/foodData",
        {}
      );
      const { foodItems, foodCategory } = response.data;
      setFoodItem(foodItems);
      setFoodCat(foodCategory);
    } catch (error) {
      console.error("Cannot load data from server: ", error);
    }
  };

  useEffect(() => {
    foodData();
  }, []);

  return (
    <>
      <div>
        <StickyNavbar />
      </div>
      <div className="relative">
      <Carousel className="mt-10">
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="max-h-60 w-full object-cover opacity-80 md:max-h-96"
        />
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="max-h-60 w-full object-cover opacity-80 md:max-h-96"
        />
        <img
          src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 3"
          className="max-h-60 w-full object-cover opacity-80 md:max-h-96"
        />
      </Carousel>
      
        <div className="absolute w-4/5 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg">   
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white ">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg" placeholder="Search Dal Makhni, Butter Chicken." value = {search} onChange={(e) => {setSearch(e.target.value)}} required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </div>

    </div>
      
      <div >
        {foodCat.length !== 0 ? (
          foodCat.map((category) => (
            <div key={category._id}>
              <div className="text-4xl flex justify-center py-3 font-semibold subpixel-antialiased">{category.CategoryName}</div>
              <hr />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
                {foodItem.length !== 0 ? (
                  foodItem
                    .filter((item) => (item.CategoryName === category.CategoryName) && (item.name.toLowerCase().includes(search)) ) 
                    .map((filteredItem) => (
                      
                          <div key={filteredItem._id} className="py-4" >
                          <FoodCard name = {filteredItem.name}
                            options = {filteredItem.options[0]}
                            imgSrc = {filteredItem.img}
                            desc = {filteredItem.description}
                          />
                          </div>
                          
                    
                      
                    ))
                ) : (
                  <div>No such data is found</div>
                )}
              </div> 
            </div>
          ))
        ) : (
          "Loading..."
        )}
      </div>
      <div>
        <FooterWithSocialLinks />
      </div>
    </>
  );
};

export default HomeScreen;
