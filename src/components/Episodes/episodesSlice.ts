import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from '../../api/api';
import { IFilm } from './episodesTypes';

type initState = {
  ep?:IFilm[];
  searchUrl?: string;
  status: 'loading' | 'success' | 'failed'| null;
  currentEpisode?:number | null;
}

const initialState:initState = {
  ep: [],
  searchUrl: '',
  status: null,
  currentEpisode:null,
  }

export const getEpisodes = createAsyncThunk('/', async () => {
  const data = await getData();
  return data.results;
});

export const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
   movieId:((state,{payload}) => ({...state, currentEpisode:payload})),
   addSearchUrl:((state,{payload}) => ({...state, searchUrl:payload}))
  },
  extraReducers: (builder) => {
    builder.addCase(getEpisodes.pending,() => ({ep:[], status:'loading'}));
    builder.addCase(getEpisodes.rejected,() => ({ep:[], status:'failed'}));
    builder.addCase(getEpisodes.fulfilled,(state, {payload}) => ({...state, ep:payload,status:'success'}));
  }
  });

export const { movieId, addSearchUrl } = episodesSlice.actions;
export default episodesSlice.reducer;