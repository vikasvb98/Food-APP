import StickyNavbar from "../components/Navbar"
import FooterWithSocialLinks from "../components/Footer"
import FoodCard from "../components/Card"
import HeroCarousel from "../components/carousel"

const HomeScreen = () => {
  return (
    <>
        <div><StickyNavbar /> </div>
        <div><HeroCarousel /> </div>
        <div>
          <FoodCard  />
          <FoodCard  />
          <FoodCard  />
          <FoodCard  />
          <FoodCard  />
        </div>
        <div><FooterWithSocialLinks /> </div>
    </>

  )
}

export default HomeScreen