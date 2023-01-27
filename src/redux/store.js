import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./slices/ItemSlice";

export const store = configureStore({
	reducer: {
		ItemSlice,
	}
});

