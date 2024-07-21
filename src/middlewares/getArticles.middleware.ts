import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError} from 'axios';
import {ArticlesResponse} from 'models/articles';

interface FetchError {
  errorMessage: string | undefined;
}

export interface GetArticles {
  viewedDays: number;
}

export const getArticles = createAsyncThunk<
  ArticlesResponse,
  GetArticles,
  {rejectValue: AxiosError<FetchError>}
>('getArticles', async (data, thunkApi) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${data.viewedDays}.json?api-key=${
        import.meta.env.VITE_API_KEY
      }`,
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const axiosError = error as AxiosError<FetchError>;
      return thunkApi.rejectWithValue(axiosError);
    }
  }
});
