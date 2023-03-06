import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type EventState = {
  value: {
    coord: number[] | null;
    // long: number | null;
  };
};

const initialState: EventState = {
  value: { coord: null },
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    localisationEvent: (state, action: PayloadAction<{ coord: number[] }>) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { localisationEvent } = eventSlice.actions;
export default eventSlice.reducer;
