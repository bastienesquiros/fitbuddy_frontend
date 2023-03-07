import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InputEventState = {
  value: {
    coords: number[] | null;
  };
};

const initialState: InputEventState = {
  value: { coords: null },
};

export const eventSlice = createSlice({
  name: 'inputEvent',
  initialState,
  reducers: {
    localisationEvent: (state, action: PayloadAction<{ coords: number[] }>) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { localisationEvent } = eventSlice.actions;
export default eventSlice.reducer;
