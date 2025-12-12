import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart =()=>{
    const items=useSelector((store)=>store.cart.items)
    console.log(items);

    const dispatch=useDispatch()

    const handleClear =()=>{
        dispatch(clearCart());
    }

    return(
        <div className="w-6/12 m-auto">
            <h1 className="font-bold text-2xl text-center my-5">Cart</h1>
            <button className="m-2 px-4 py-2 bg-green-300 rounded-2xl block mx-auto"
                onClick={handleClear}>
                Clear
             </button>
            {
                items.map((item)=>(
                    <ItemList key={item.card.info.id} dataofitems={item}/>
                ))
             }
        </div>
    )
}

export default Cart