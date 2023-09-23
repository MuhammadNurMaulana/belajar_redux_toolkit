import { createSlice, configureStore } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cartSlice: cartSlice.reducer,
  },
});
console.log("oncreate store:", store.getState());

store.subscribe(() => {
  console.log("onchange store:", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 30 }));
