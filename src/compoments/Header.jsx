import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className='flex justify-between py-4'>
  <nav className='flex gap-8 items-center  text-gray-500 font-semibold'>
  <Link  className=' text-primary font-semibold text-2xl' to='/'>PizzaHaven</Link>
    <Link to='/'>Home</Link>
    <Link to=''>Menu</Link>
    <Link to=''>About</Link>
    <Link to=''>Contact</Link>

  </nav>
  <nav className=" flex gap-4 items-center text-gray-500 font-semibold">
  <Link to='/dashboard' className="">Add to Cart</Link>
    <Link to='/dashboard' className='bg-primary rounded-full text-white px-8 py-2'>User Dashboard</Link>
  </nav>
</header>
        </div>
    );
};

export default Header;