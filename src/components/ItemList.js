import { RES_LOGO } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const ItemList =({dataofitems})=>{
    const dispatch=useDispatch();

     const handleaddItem =(data,e)=>{
        e.stopPropagation();
         dispatch(addItem(data))
     }
     //console.log(dataofitems);
    return(
        <div className=" flex justify-between  border-b border-gray-300 py-4 text-left ml-4">
            <div>
                <div className="font-medium text-base mb-2 ">{dataofitems.card.info.name}</div>
                <div className="text-sm mb-2"> &#8377; {dataofitems.card.info.defaultPrice ? dataofitems.card.info.defaultPrice /100 : dataofitems.card.info.price/100}</div> 
                    <div className="text-sm mb-2">{dataofitems.card.info.description}</div>
           </div>
            
            <div className="relative inline-block">
                <button className="absolute top-1 left-7 bg-green-300 px-3 py-1 rounded" onClick={(e)=>handleaddItem(dataofitems,e)}>Add +</button>
                <img className="w-30"
                 src={RES_LOGO + dataofitems.card.info.imageId} ></img>   
             </div> 
        </div>
    )  
}

export default ItemList;