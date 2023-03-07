import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SignInState = {
  value: {
    token: string | null;
  };
};

const initialState: SignInState = {
  value: {
    token: null,
  },
};

export const userSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ token: string }>) => {
      state.value.token = action.payload.token;
    },
  },
});

export const { signIn } = userSlice.actions;
export default userSlice.reducer;
