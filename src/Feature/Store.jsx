import { configureStore } from "@reduxjs/toolkit";
import Addtocart from "./cartslice"

export default configureStore({
    reducer:{
        Cart:Addtocart,
    }
})