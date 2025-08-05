import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
        console.log("add", some, action.payload, state)
        const some = state.favoriterecipes.some((item) => item.idFood == action.payload.idFood)
        if(!some){
            state.favoriterecipes.push(action.payload)
        }
        else{
            state.favoriterecipes = state.favoriterecipes.filter((item) => item.idFood != action.payload.idFood)
        }
    }
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
