import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserLocState = {
  value: {
    token: string | null;
    lat: number;
    long: number;
  };
};

const initialState: UserLocState = {
  value: { token: null, lat: 0, long: 0 },
};

export const userSlice = createSlice({
  name: 'userLoc',
  initialState,
  reducers: {
    addLocation: (state, action: PayloadAction<{ lat: any; long: any }>) => {
      state.value.lat = action.payload.lat;
      state.value.long = action.payload.long;
    },
  },
});

export const { addLocation } = userSlice.actions;
export default userSlice.reducer;
