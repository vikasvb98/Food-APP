import { Carousel } from "@material-tailwind/react";

const HeroCarousel = () => {
  return (
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
      
        <form className="absolute w-4/5 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg">   
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white ">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg" placeholder="Search Dal Makhni, Butter Chicken." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>

    </div>
  );
};

export default HeroCarousel;
