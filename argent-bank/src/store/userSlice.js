import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchUserFailure: (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;

export const fetchUserProfile = (token) => async (dispatch) => {
    dispatch(fetchUserStart());
  
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
  
        dispatch(fetchUserSuccess(response.data.body));
    } catch (error) {
        dispatch(fetchUserFailure(error.message));
    }
};

export default userSlice.reducer;
