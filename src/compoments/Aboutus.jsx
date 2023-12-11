import Lottie from "lottie-react";
import SectionHeader from "./SectionHeader";
import aboutus from "../assets/aboutus.json";

const Aboutus = () => {
  return (
    <div className="py-24">
      <section className=" my-16" id="about">
            <div className="text-center ">
              <SectionHeader subHeader={"Our story"} mainHeader={"About us"} />
            </div>
        <div className=" justify-between items-center   flex  gap-4">
          <div>
            <h3 className="text-4xl font-semibold mb-5">
            Discover Our Story
            </h3>
            <p className=" text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Magniminima odit recusandae. Illum ipsa non repudiandae? Eum ipsam
              istequos suscipit tempora? Aperiam esse fugiat inventore
              laboriosam officiis quam rem! At consectetur delectus ducimus est
              facere iure molestias obcaecati quaerat vitae voluptate?  
            </p>
            <div className="mt-6">
            {/* <PrimaryBtn text={"Know More"}></PrimaryBtn> */}
            <button className="bg-primary px-8 flex items-center gap-1 text-white py-2 rounded-full">
              Know more
          </button>
            </div>
          
          </div>
          <div className="">
            <Lottie animationData={aboutus} />
          </div>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeader subHeader={"Don't hesitate"} mainHeader={"Contact us"} />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+46738123123"
          >
            +46 738 123 123
          </a>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
