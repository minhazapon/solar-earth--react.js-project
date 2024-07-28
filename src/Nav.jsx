import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { fireContext } from "./firebase/AuthContext";




const Nav = () => {

    const {user, logOut} = useContext(fireContext)

    const navs = <>
    
    
         <li><NavLink to="/" >Home</NavLink></li>
         <li><NavLink to="/system" >Solar System</NavLink></li>
         <li><NavLink to="/info" >Solar Info</NavLink></li>
  
    </>


        const handleOut = () => {
        logOut()
        .then(() => console.log('logOut successfully'))
        .catch( error => 
          console.error(error)
        )
      
        } 





    return (
        <div className=" ">

            <div>

            <div className="navbar bg-gradient-to-r from-teal-400 to-blue-500  shadow-lg ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {navs}
      </ul>
    </div>

    <div className=" flex items-center gap-2">
      <div className=" bg-white p-3 rounded-xl">
      <img className=" h-[50px]" src="https://i.ibb.co/gT7WH5S/energy.png" alt="" />
      </div>
    
     <a className="  text-blue-900 font-semibold  text-2xl">Solar Earth</a>

    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navs}
    </ul>
  </div>
  <div className="navbar-end">


  { user ? <>
    
    <button onClick={handleOut} className=" btn">SignOut</button>
  </>:

    <Link to="/in" >
    <a className="btn">Sign In</a>
    </Link> 

  }

    
    
  </div>
</div>











            </div>
            
        </div>
    );
};

export default Nav;