import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Company } from "../types/company.type";
import { fetchCompany, saveCompany } from "../api/company-api.service";

interface CompanyState {
  company: Company | null;
  loading: boolean;
  error:   string | null;
}

const initialState: CompanyState = {
  company: null,
  loading: false,
  error: null
};

export const getCompany = createAsyncThunk('company/fetch', fetchCompany);
export const updateCompany = createAsyncThunk('company/update', saveCompany);

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Fetch
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

      // Save
      .addCase(updateCompany.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.company = action.payload.data;
      })
      .addCase(updateCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to update company';
      });
  }
});

export default companySlice.reducer;