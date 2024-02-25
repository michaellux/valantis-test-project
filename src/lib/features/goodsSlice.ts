import { Goods } from "../../app/components/goods/Goods.types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { POST } from '../../app/api/route';
import { NextRequest, NextResponse } from "next/server";

interface FetchGoodsArg {
  nameOfMethod: string; 
  optionalParams?: object;
}

export const fetchGoods = createAsyncThunk<NextResponse, FetchGoodsArg>('goods/fetchGoods', 
async ({ nameOfMethod, optionalParams }) => {
  console.log("fetchGoods");
  const context = {
    params: {
      nameOfMethod,
      optionalParams
    }
  }
  const response = await POST(null, context) as NextResponse;
  return response;
});

interface GoodsState {
  goods: Goods[];
  loading: boolean;
  error: string | null | unknown;
}

const initialState: GoodsState = {
  goods: [],
  loading: false,
  error: null,
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        async (state, action) => {
            state.loading = false;
            state.error = null;
            if (action.payload && action.payload.ok) {
                const goodsData = await action.payload.json();
                state.goods = goodsData;
            } else {
                state.error = 'Failed to fetch goods';
            }
        }
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default goodsSlice.reducer;
