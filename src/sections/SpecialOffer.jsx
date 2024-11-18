import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        <span className="text-coral-red">Special </span>
          Offer          
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Nike shoes are a global icon of performance, style, and innovation. Renowned for their cutting-edge technology and sleek designs, Nike shoes cater to athletes and casual wearers alike. From the responsive cushioning of the Air Max series to the lightweight precision of the Flyknit range, Nike delivers footwear that enhances performance while ensuring comfort.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to excellence and details ensures your satisfaction.</p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now" iconUrl={arrowRight}/>
        <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
