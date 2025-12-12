import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantMenuTitle from './RestaurantMenuTitle';
import { useState } from 'react';

function RestaurantMenu() {
 const {resid}= useParams();
 const listofData =useRestaurantMenu(resid);

   const [dataDisplay,setdataDisplay] =useState();
 
// if(listofData === null) return <Shimmer />

 const {name,costForTwo,cuisines}= listofData?.cards?.[2]?.card?.card?.info || {} ;

const items = listofData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;

const categoriesdata=listofData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  c=> c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

console.log(categoriesdata);

//console.log(listofData)

 return(
    <div className='w-6/12  m-auto text-center'>
      <h1 className='font-bold text-lg my-3'>{name}  </h1>
        <h5 className='font-bold'>{(cuisines && cuisines.length > 0 ? cuisines.join(", ") : "Cuisines not available")} - {costForTwo}</h5>
      {
        categoriesdata?.map((categories,index)=> (
        <RestaurantMenuTitle 
        key={categories.card.card.title} 
        data={categories}
        dataDisplay={index === dataDisplay ? true :false}
        setdataDisplay={()=>setdataDisplay(prev => (prev === index ? null : index))} />
      ))
      }
       
    </div>
  )
}

export default RestaurantMenu
