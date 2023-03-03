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
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      state.value.email = action.payload.email;
      state.value.firstName = action.payload.firstName;
      state.value.lastName = action.payload.lastName;
      state.value.pseudo = action.payload.pseudo;
      state.value.avatar = action.payload.avatar;
      state.value.birthday = action.payload.birthday;
      state.value.gender = action.payload.gender;
      state.value.bio = action.payload.bio;
      state.value.inscriptionDate = action.payload.inscriptionDate;
      state.value.sport = action.payload.sport;
      state.value.level = action.payload.level;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
