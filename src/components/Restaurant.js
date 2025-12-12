import { useContext } from "react";
import { RES_LOGO } from "../utils/constants";
import UserContext from "../utils/UserContext";


const Restaurant =(props)=>{
    const {resdata} =props;

    const {loggedInUser}=useContext(UserContext);

return (
        <div data-testid="rescard" className='m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200'>
                 <img className="h-50 w-[200px]" src={RES_LOGO + resdata.cloudinaryImageId }></img>
                <h3 className="font-bold py-2 ">{resdata.name}</h3>
                <p>{resdata.cuisines.join(",")}</p>
                <p>{resdata.avgRating}</p>
                <p>{resdata.sla.deliveryTime} minutes</p>
                <p>{loggedInUser}</p>
        </div>
)
}


export const withpromotedRest =(Restaurant)=>{
        return (props)=>{
                return(
                        <div>
                                <p className="absolute bg-black text-white ml-7 mt-2">Vegeterian</p>
                                <Restaurant {...props}/>
                        </div>
                )
        }
}

export default Restaurant;
