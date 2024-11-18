import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Nike shoes are a global icon of performance, style, and innovation. Renowned for their cutting-edge technology and sleek designs, Nike shoes cater to athletes and casual wearers alike. From the responsive cushioning of the Air Max series to the lightweight precision of the Flyknit range, Nike delivers footwear that enhances performance while ensuring comfort.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to excellence and details ensures your satisfaction.</p>
        <div className="mt-11">
        <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe 8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;