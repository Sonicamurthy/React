import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header =() =>{
        const [dataLogin,setDataLogin] =useState("Login");
    const status=useOnlineStatus();

    const {loggedInUser}=useContext(UserContext);
    //console.log(loggedInUser);

    const cart=useSelector((store)=>store.cart.items);
   // console.log(cart);


    return(
        <div className=" flex justify-between bg-pink-100">
            <div className='app-logo-container'>
                 <img className="h-30 w-30" src={LOGO_URL} alt="logo"></img>
            </div> 
            <div className="flex items-center ">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                        online status:{status ? "✅" :"🟥"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                         <Link to="/about">About</Link>
                    </li >
                    <li className="px-4">
                         <Link to="/contact">Contact</Link>
                    </li>
                     <li className="px-4">
                         <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 text-xl font-bold">
                        <Link to="/cart"> Cart -{cart.length} </Link> 
                    </li>
                    <button className="login-btn"
                     onClick={()=>{
                       dataLogin ==="Login" ? setDataLogin("Logout") : setDataLogin("Login");
                    }}>{dataLogin}</button>
                    <li className="px-4">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
