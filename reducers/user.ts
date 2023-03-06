import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  value: {
    token: string | null;
    lat: Number | null;
    long: Number | null;
  };
};

const initialState: UserState = {
  value: { token: null, lat: null, long: null },
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
    addLocation: (
      state,
      action: PayloadAction<{ lat: Number; long: Number }>
    ) => {
      state.value.lat = action.payload.lat;
      state.value.long = action.payload.long;
    },
  },
});

export const { login, addLocation } = userSlice.actions;
export default userSlice.reducer;
