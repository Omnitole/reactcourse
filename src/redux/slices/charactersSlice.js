import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";

import {characterService} from "../../services";

const initialState = {
    characters: [],
    errors: null
}

const getByIds = createAsyncThunk(
    'charactersSlice/getByIds',
    async ({ids}, thunkApi) => {
        try {
            const {data} = await characterService.getByIds(ids)
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)


const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getByIds.fulfilled, (state, action) => {
                state.characters = action.payload
            })
            .addMatcher(isRejected(getByIds), (state, action) => {
                state.errors = action.payload
            })
            .addMatcher(isFulfilled(getByIds), state => {
                state.errors = null
            })

})

const {reducer: charactersReducer, ...actions} = charactersSlice;

const characterActions = {
    ...actions,
    getByIds
}

export {
    charactersReducer,
    characterActions
}