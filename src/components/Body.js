// import reslist from "../utils/mockData";
import Restaurant,{withpromotedRest} from "./Restaurant";
import { useState ,useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body =() =>{
const [data,setData]=useState([]);
const [searchdata,setSearchData] =useState("");
const [filteredRest,setFilteredRest] =useState();

const status=useOnlineStatus();

const VegeterainRest= withpromotedRest(Restaurant);


useEffect(()=>{
   fetchData();
},[])

const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json =await data.json(); 
    //console.log(json);
     setData(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     setFilteredRest(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     //console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
}


if(status === false) 
    return <h1>opps internet is Off</h1>

const {setName,loggedInUser}=useContext(UserContext);


return data.length === 0 ? <Shimmer /> :(
    <div className='body-container '>
        <div className="flex mx-10 my-10 ">
            <input type="text" 
             value={searchdata}
             data-testid="searchinput"
             className="border 2px mx-10 "
             onChange={(e)=>setSearchData(e.target.value)
             }/>
            <button className="bg-green-200 px-3 py-0.5 mx-10 rounded-lg"
            onClick={()=>{
                 let searchfilteredData =data.filter(res=> res.info.name.toLowerCase().includes(searchdata.toLowerCase()))
                setFilteredRest(searchfilteredData);
            }}>search </button>
            
            <button 
            className="bg-green-200 px-3 py-0.5 mx-10 rounded-lg "
            onClick={()=>{
                let filtereddata = data.filter((res)=>res.info.avgRating > 4.5);
                setFilteredRest(filtereddata);
                }}
            >
                Top rated Rest</button>
                <div>
                    <label>Context :</label>
                    <input  type="text" className=" border border-black pl-1 ml-2" value={loggedInUser} onChange={(e)=>setName(e.target.value)} /> 
                </div>
                 
        </div>
        <div className='flex flex-wrap '>
       {
        filteredRest.map((restaurant)=>(
            <Link key={restaurant.info.id} 
            to={"/restaurant/"+ restaurant.info.id}
            >
                {
                    restaurant.info.veg ? (
                    <VegeterainRest   resdata={restaurant.info} />) :(
                         <Restaurant  resdata={restaurant.info} />)
                }
                 </Link>
       
        ))}
       </div>
    </div>
)
}

export default Body;

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING