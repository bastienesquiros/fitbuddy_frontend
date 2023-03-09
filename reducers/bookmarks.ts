import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BookmarkState = {
  value: any[];
};

const initialState: BookmarkState = {
  value: [],
};

export const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmarks: (state, action: PayloadAction<any>) => {
      state.value.push(action.payload);
    },
    deleteBookmarks: (state) => {
      state.value = [];
    },
    removeBookmark: (state, action: PayloadAction<any>) => {
      state.value = state.value.filter(
        (bookmark) => bookmark !== action.payload
      );
    },
  },
});

export const { addBookmarks, deleteBookmarks, removeBookmark } =
  bookmarkSlice.actions;
export default bookmarkSlice.reducer;
