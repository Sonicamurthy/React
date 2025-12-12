const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";


const appStore=configureStore({
    //this reducer is big recuder which contains all the small reducer form the different slices
    reducer:{
        cart:cartReducer, 
    }
});

export default appStore 