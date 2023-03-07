import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SignUpState = {
  value: {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    pseudo: string | null;
    birthday: Date | null;
    gender: string | null;
    bio: string | null;
    inscriptionDate: Date | null;
    password: string | null;
    token: string | null;
  };
};

const initialState: SignUpState = {
  value: {
    email: null,
    firstName: null,
    lastName: null,
    pseudo: null,
    birthday: null,
    gender: null,
    bio: null,
    inscriptionDate: null,
    password: null,
    token: null,
  },
};

export const userSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<any>) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { signUp } = userSlice.actions;
export default userSlice.reducer;
