import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store/rootReducer';
import {IArticlesState} from 'models/articles';
import {getArticles} from 'middlewares/getArticles.middleware';

const initialState: IArticlesState = {
  articles: [],
  showedArticle: null,
  loading: false,
  error: null,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setShowedArticle: (state, action) => {
      state.showedArticle = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getArticles.pending, state => {
      state.loading = true;
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload.results;
    });
    builder.addCase(getArticles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message as string;
    });
  },
});
export const {setShowedArticle} = articlesSlice.actions;
export default articlesSlice.reducer;
export const articlesState = (state: RootState) => state.articles;
