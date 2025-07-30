import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Pagination, Parcel, ParcelFilterTerms, ParcelToCreate, ParcelToUpdate } from "../types/parcel.type";
import { createParcel, deleteParcel, fetchParcels, getParcelById, updateParcelById } from "../api/parcel-api.service";

interface ParcelState {
  current: Parcel | null;
  list: Parcel[];
  loading: boolean;
  error: string | null;
  pagination: Pagination;
  filterTerms: ParcelFilterTerms;
  currentPage: number;
  lastPage: number;
  totalItems: number;
}

const initialState: ParcelState = {
  current: null,
  list: [],
  loading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 10
  },
  filterTerms: {
    senderName: null,
    senderTelephone: null,
    senderAddress: null,
    senderCity: null,
    receiverName: null,
    receiverTelephone: null,
    receiverAddress: null,
    receiverCity: null,
    code: null,
    pickedUpAt: null,
    deliveredAt: null,
    createdAt: null,
    completed: 'NOT_COMPLETED'
  },
  currentPage: 1,
  lastPage: 1,
  totalItems: 0
};

export const getParcels = createAsyncThunk(
  'parcel/fetch',
  async (
    args: { pagination?: Pagination; filterTerms?: ParcelFilterTerms } = {},
    { getState }
  ) => {
    const { parcel } = getState() as { parcel: ParcelState };

    const pagination = args.pagination || parcel.pagination;
    const filterTerms = args.filterTerms || parcel.filterTerms;

    return await fetchParcels(pagination, filterTerms);
  }
);
export const selectParcelById = createAsyncThunk('parcel/select', getParcelById);
export const removeParcel = createAsyncThunk(
  'parcel/delete',
  async (id: string, { dispatch }) => {
    await deleteParcel(id);
    await dispatch(getParcels({})); // no need to pass manually
  }
);
export const updateParcel = createAsyncThunk(
  'parcel/update',
  async (parcelToUpdate: ParcelToUpdate, { dispatch }) => {
    await updateParcelById(parcelToUpdate);
    await dispatch(getParcels({}));
  }
);
export const addNewParcel = createAsyncThunk(
  'parcel/create',
  async (parcelToCreate: ParcelToCreate, { dispatch }) => {
    await createParcel(parcelToCreate);
    await dispatch(getParcels({}));
  }
);

const parcelSlice = createSlice({
  name: 'parcel',
  initialState,
  reducers: {
    resetSelectedParcel(state) {
      state.current = null;
    }
  },
  extraReducers: builder => {
    builder
      // Fetch
      .addCase(getParcels.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getParcels.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data as Parcel[];
        state.currentPage = action.payload.currentPage ?? 1;
        state.lastPage = action.payload.lastPage ?? 1;
        state.totalItems = action.payload.total ?? 0;
      })
      .addCase(getParcels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch parcels';
      })

      // Get by id
      .addCase(selectParcelById.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(selectParcelById.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload.data as Parcel;
      })
      .addCase(selectParcelById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch parcel by id';
      })

      // Update
      .addCase(updateParcel.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateParcel.fulfilled, (state) => {
        state.loading = false;
        state.current = null;
      })
      .addCase(updateParcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to update parcel by id';
      })

      // Create
      .addCase(addNewParcel.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewParcel.fulfilled, (state) => {
        state.loading = false;
        state.current = null;
      })
      .addCase(addNewParcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to create parcel';
      })

      // Delete
      .addCase(removeParcel.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeParcel.fulfilled, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(removeParcel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to delete parcel';
      });
  }
});

export const { resetSelectedParcel } = parcelSlice.actions;
export default parcelSlice.reducer;