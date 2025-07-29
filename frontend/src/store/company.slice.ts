import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Company } from "../types/company.type";
import { fetchCompany } from "../api/company-api.service";

interface CompanyState {
  company:  Company | null;
  loading:  boolean;
  error:    string | null;
}

const initialState: CompanyState = {
  company: null,
  loading: false,
  error: null
};

export const getCompany = createAsyncThunk('company/fetch', fetchCompany);

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCompany.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.company = action.payload.data;
      })
      .addCase(getCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch company';
      })
  }
});

export default companySlice.reducer;