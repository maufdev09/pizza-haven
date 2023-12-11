
import { HiArrowRightCircle } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="flex items-center justify-center ">
      <div className=" py-20 w-2/4">
        <h1 className=" text-4xl font-semibold">
          Deliciously <br/> Crafted Pizzas Await 
          <span className="text-primary">You!</span>
        </h1>
        <p className="mt-4 text-gray-500">
          Welcome to our pizza haven! Indulge in an exquisite assortment of
          handcrafted pizzas, prepared with the finest ingredients and bursting
          with flavor. Order now and savor a slice of perfection!
        </p>
        <div className="flex gap-4 py-5">
         
          <button className="bg-primary px-8 flex items-center gap-1 text-white py-2 rounded-full">
            Order Now
          <HiArrowRightCircle />
          </button>
          <button className=" flex text-gray-500  gap-2 py-2 items-center">
            Learn more 
            <HiArrowRightCircle />

          </button>
        </div>
      </div>
      <div className=" w-2/4">
        <img className="w-full"
          src={"/pizza.png"}
        
          alt={"pizza"}
        />
      </div>
    </section>
  );
};

export default Hero;
