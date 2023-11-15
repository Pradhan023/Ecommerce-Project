import { createSlice } from "@reduxjs/toolkit";

const AddtoCart = createSlice({
    name:'Cart',
    initialState:{    
        cart:[],
    },
    reducers:{
        addtoCart: (state, action) => {
            const addedItem = state.cart.find(
              (item) => item.id === action.payload.id
            );
      
            if (addedItem) {
              // if item id or same item exist then increase its quantity and total
              addedItem.quantity += 1;
              addedItem.total = addedItem.price * addedItem.quantity;
            } else {
              // if item or id doesn't exist, add it to the cart with default quantity 1
              state.cart.push({
                ...action.payload,
                quantity: 1,
                // total: action.payload.price,
              });
            }
          },
      
        RemoveItem:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id !==action.payload.id)
        },

        increaseQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item) {
              item.quantity += 1;
              item.total = item.price * item.quantity;
            }
          },
          decreaseQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
              item.total = item.price * item.quantity;
            }
          },      
    }
})

export default AddtoCart.reducer;
export const{addtoCart,RemoveItem,increaseQuantity,decreaseQuantity}=AddtoCart.actions