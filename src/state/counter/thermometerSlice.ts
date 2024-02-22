import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface thermState {
    temperature: number | null;
    co2Level: number | null;
    isNormal: boolean;
}

const initialState: thermState = {
    temperature: null,
    co2Level: null,
    isNormal: false,
};

interface ApiData {
    temp: string;
    co2: string;
}

const thermSlice = createSlice({
    name: "therm",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTherm.fulfilled, (state, action) => {
            state.temperature = parseFloat(action.payload.temp);
            state.co2Level = parseFloat(action.payload.co2);
            if (state.temperature > 27 || state.co2Level > 800) {
                state.isNormal = false;
            } else {
                state.isNormal = true;
            }
        })
    }
});

export const fetchTherm = createAsyncThunk(
    "therm/fetchTherm",
    async () => {
        const response = await fetch("http://dushnila.gooddelo.com/data");
        const data: ApiData = await response.json();
        return data
    }
)


// export const { } = counterSlice.actions;

export default thermSlice.reducer;