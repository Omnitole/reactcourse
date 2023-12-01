import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";

import {episodeService} from "../../services";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    currentEpisode: null,
    errors: null
}

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async (page, thunkApi) => {
        try {
            const {data} = await episodeService.getAll(page)
            return data
        } catch (e) {
            return thunkApi.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {
        setCurrent: ((state, action) => {
            state.currentEpisode = action.payload.currentEpisode
        })
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {next, prev}, results} = action.payload
                state.episodes = results
                state.prevPage = prev
                state.nextPage = next
            })
            .addMatcher(isFulfilled(getAll), state => {
                state.errors = null
            })
            .addMatcher(isRejected(getAll), (state, action) => {
                state.errors = action.payload
            })
})

const {reducer: episodeReducer, actions} = episodesSlice;

const episodeActions = {
    ...actions,
    getAll
}

export {
    episodeReducer,
    episodeActions
}



