
const MenueItem = () => {
    return (
        <div className="bg-slate-200 px-3 hover:bg-white rounded-lg text-center py-4 z-10 transition-all hover:shadow-2xl shadow-lg shadow-red-200">
<div className="text-center w-28 block mx-auto">
<img className="w-full " src={"/pizza.png"} alt="pizza" />

</div>
        <h4 className=" font-semibold text-lg my-3"> Pepperoni pizza</h4>
        <p className="text-gray-500 text-sm">
          {" "}
          Welcome to our pizza haven! Indulge in an exquisite assortment .{" "}
        </p>
        <button className=" mt-4 bg-primary text-white  rounded-full px-6 py-2">
          {" "}
          Add to Cart
        </button>
      </div>
    );
};

export default MenueItem;