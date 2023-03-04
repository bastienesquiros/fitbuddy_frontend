import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  value: {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    pseudo: string | null;
    avatar: string | null;
    birthday: Date | null;
    gender: string | null;
    bio: string | null;
    inscriptionDate: Date | null;
    sport: string | null;
    level: string | null;
    password: string | null;
  };
};

const initialState: UserState = {
  value: {
    email: null,
    firstName: null,
    lastName: null,
    pseudo: null,
    avatar: null,
    birthday: null,
    gender: null,
    bio: null,
    inscriptionDate: null,
    sport: null,
    level: null,
    password: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
