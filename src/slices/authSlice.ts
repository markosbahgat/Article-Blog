import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store/rootReducer';
import {IAuthState} from 'models/auth';

const initialState: IAuthState = {
  sideBarOpened: false,
  coords: {
    lat: 0,
    long: 0,
    offset: '100KM',
  },
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleSideBar: state => {
      state.sideBarOpened = !state.sideBarOpened;
    },
    updateLocation: (state, {payload}) => {
      state.coords = payload;
    },
  },
});
export const {toggleSideBar, updateLocation} = authSlice.actions;
export default authSlice.reducer;
export const authState = (state: RootState) => state.auth;
