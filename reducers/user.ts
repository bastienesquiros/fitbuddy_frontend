import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
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
    lat: number;
    long: number;
  };
};

const initialState: UserState = {
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
    lat: 0,
    long: 0,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<any>) => {
      state.value = { ...state.value, ...action.payload };
    },
    signIn: (state, action: PayloadAction<any>) => {
      state.value = { ...state.value, ...action.payload };
    },
    addLocation: (state, action: PayloadAction<{ lat: any; long: any }>) => {
      state.value.lat = action.payload.lat;
      state.value.long = action.payload.long;
    },
    logout: (state) => {
      state.value = {
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
        lat: 0,
        long: 0,
      };
    },
  },
});

export const { signUp, signIn, addLocation, logout } = userSlice.actions;
export default userSlice.reducer;
