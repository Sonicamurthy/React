import { SlArrowDown,SlArrowUp } from "react-icons/sl";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantMenuTitle =({data,dataDisplay ,setdataDisplay})=>{

    const handledisplay =()=>{
        setdataDisplay();
    }

     //console.log(data);  
    return(
        <div className="shadow-md pt-4 mb-5 " onClick={handledisplay}>
            <div className="flex justify-between  "> 
                <div className="ml-4 font-bold">{data.card.card.title} ({data.card.card.itemCards.length})</div>
                <div className="mr-4" > {dataDisplay ? (<SlArrowDown />):(<SlArrowUp />)} </div>                 
            </div>
            <div>
                   {
                    dataDisplay && (
                        data.card.card.itemCards.map((items)=>(
                            <ItemList key={items.card.info.id} dataofitems={items}/>
                        ))
                    )
                    }
            </div>
    </div>
    )
}

export default RestaurantMenuTitle;