import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type EventState = {
  value: any[];
};

const initialState: EventState = {
  value: [],
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<any>) => {
      state.value.push(action.payload);
    },
    // deleteEvents: (state) => {
    //   state.value = [];
    // },
    removeEvent: (state, action: PayloadAction<any>) => {
      state.value = state.value.filter((event) => event !== action.payload);
    },
  },
});

export const { addEvent, removeEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
