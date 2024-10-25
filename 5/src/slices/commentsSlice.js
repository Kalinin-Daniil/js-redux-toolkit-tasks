// BEGIN (write your solution here)
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments: (state, action) => {
            return action.payload;
        },
    },
});

export const { actions } = commentsSlice;

export default commentsSlice.reducer;
// END