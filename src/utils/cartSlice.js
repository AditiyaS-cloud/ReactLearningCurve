import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // state:initialState
    // action:data which is coming in while dispatching
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

//destructuring the cartSlice.actions into variuos actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//combines all reducers and bind into one called reducer
export default cartSlice.reducer;

// cartSlice = {
//   actions: {
//     addItem,
//     removeItem,
//     clearCart,
//   },
//   reducer: reducers,
// };
