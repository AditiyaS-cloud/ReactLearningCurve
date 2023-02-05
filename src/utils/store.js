import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

// lETS REVISE EVERYTHING FROM BEGINNING

// Create store
// --configureStore() - RTK

// Provide my store to app
//     - <Provider store={store}></Provider> - import from react-redux

// Slice
//     - RTK - createSlice({
//         name: "",
//         initialState
//         reducers: {
//             addItem:(state,action)=>{ state = action.payload }
//         }
//    })
//
// export const {1st action, 2nd action, 3rd action} = cartSlice.actions;
// export default cartSlice.reducer;

//Put that slice into my store.js - inside configureStore({})
//   reducer: {
//     cart: cartSlice,
//     user:userSlice
//   },
