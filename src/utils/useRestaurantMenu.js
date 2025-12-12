import { useState,useEffect } from "react";
import { RESTAURANTMENU_API } from "./constants";

// This is CUSTOM HOOK
const useRestaurantMenu= (resid)=>{
    const [listofData,setlistofData] =useState();


    useEffect(()=>{
        fetchmenu();
    },[]);
    
    const fetchmenu = async () => {
    const data = await fetch(RESTAURANTMENU_API + resid);
    const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
     setlistofData(json.data);
    //  console.log(json.data);
  };

       return listofData;
}

export default useRestaurantMenu