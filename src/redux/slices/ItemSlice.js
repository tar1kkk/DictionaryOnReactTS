import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	item: [],
	word: '',
	status: ''
}
export const fetchWord = createAsyncThunk('', async (word) => {
	const { data } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/` + word);
	return data;
}
);



const ItemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		addItem(state, action) {
			state.item = action.payload;
		},
		changeWord(state, action) {
			state.word = action.payload;
		}
	},
	extraReducers: {
		[fetchWord.pending]: (state) => {
			state.status = 'loading';
			state.item = [];
		},
		[fetchWord.fulfilled]: (state, action) => {
			state.item = action.payload;
			state.status = 'success';
		},
		[fetchWord.rejected]: (state) => {
			state.status = 'error';
			state.item = [];
		}
	}
})


export const { addItem, changeWord } = ItemSlice.actions;

export default ItemSlice.reducer;