import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice.js";
import commentsReducer from "./commentsSlice.js";
import usersReducer from "./usersSlice.js";

// BEGIN (write your solution here)
const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        comments: commentsReducer,
    },
});

export default store;
// END