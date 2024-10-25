import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { actions as usersActions } from "./usersSlice.js";
import { actions as postsActions } from "./postsSlice.js";

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState();

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments: commentsAdapter.addMany,
    addComment: commentsAdapter.addOne,
  },
  // BEGIN (write your solution here)
  extraReducers: (builder) => {
    builder.addCase(usersActions.removeUser, (state, action) => {
      const userId = action.payload;
      const allComments = commentsAdapter.getSelectors().selectAll(state);
      const commentsToRemove = allComments.filter(comment => comment.author === userId);

      commentsAdapter.removeMany(state, commentsToRemove.map(comment => comment.id));
    });

    builder.addCase(postsActions.removePost, (state, action) => {
      commentsAdapter.removeMany(state, action.payload.comments);
    });
  },
});
// END

export const { actions } = commentsSlice;
export const selectors = commentsAdapter.getSelectors(
  (state) => state.comments
);
export default commentsSlice.reducer;