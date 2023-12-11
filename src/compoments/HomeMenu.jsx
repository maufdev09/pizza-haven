import MenueItem from "./MenueItem";
import SectionHeader from "./SectionHeader";

const HomeMenu = () => {
  return (
    <section>
      <div className=" relative">
        <div className="  w-48 mx-auto -top-20 -left-0 absolute">
          <img
            src={"/sallad1.png"}
           
            alt={"salad"}
          ></img>
        </div>
        <div className="  w-48  -right-20 -top-36 -z-10 absolute">
          <img
            src={"/sallad2.png"}
           
            alt={"salad"}
          ></img>
        </div>
      </div>
      <div className="text-center">
       {/* ................ */}
       <SectionHeader subHeader={"Check out"} mainHeader={"Menu"} ></SectionHeader>
      </div>
      <div className="grid grid-cols-3 pt-10  gap-4">
      <MenueItem></MenueItem>
      <MenueItem></MenueItem>
      <MenueItem></MenueItem>
      <MenueItem></MenueItem>
      <MenueItem></MenueItem>
      <MenueItem></MenueItem>
      </div>
    </section>
  );
};

export default HomeMenu;
