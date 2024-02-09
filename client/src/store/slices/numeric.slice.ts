/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Numeric } from '../types';

type NumericState = {
  savedNumbers: number[];
  randNumbers: number[];
  isLoading: boolean;
  error: unknown;
};

const initialState: NumericState = {
  savedNumbers: [],
  randNumbers: [],
  isLoading: false,
  error: undefined,
};

const numericSlice = createSlice({
  name: 'numeric',
  initialState: initialState,
  reducers: {
    getSavedNumbers(
      state: NumericState,
      _action: PayloadAction<Numeric.GetSavedNumberRequestPayload>
    ) {
      state.isLoading = true;
    },
    getSavedNumbersSuccess(
      state: NumericState,
      action: PayloadAction<Numeric.GetSavedNumberSuccessPayload>
    ) {
      state.savedNumbers = action.payload;
      state.isLoading = false;
    },
    getSavedNumbersError(
      state: NumericState,
      action: PayloadAction<Numeric.GetSavedNumberFailurePayload>
    ) {
      state.error = action.payload;
      state.isLoading = false;
    },
    getRandNumbers(
      state: NumericState,
      _action: PayloadAction<Numeric.GetRandNumberRequestPayload>
    ) {
      state.isLoading = true;
    },
    getRandNumbersSuccess(
      state: NumericState,
      action: PayloadAction<Numeric.GetRandNumberSuccessPayload>
    ) {
      state.randNumbers = action.payload;
      state.isLoading = false;
    },
    getRandNumbersError(
      state: NumericState,
      action: PayloadAction<Numeric.GetRandNumberFailurePayload>
    ) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const actions = numericSlice.actions;
export const reducer = numericSlice.reducer;
