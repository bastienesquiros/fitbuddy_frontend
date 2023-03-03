import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  value: {
    token: string | null;
  };
};

const initialState: UserState = {
  value: { token: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string }>) => {
      state.value.token = action.payload.token;
    },
    // logout: (state) => {
    //     state.value.token = null;
    //   },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
