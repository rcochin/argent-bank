import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';

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
    logout: (state) => {
      state.user = null;
      state.loading = null;
      state.error = null;
    },
    updateUserSuccess: (state, action) => {
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure, logout, updateUserSuccess } = userSlice.actions;

export const fetchUserProfile = (token) => async (dispatch) => {
    dispatch(fetchUserStart());
  
    try {
        const response = await axiosInstance.post('http://localhost:3001/api/v1/user/profile', {}, {
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });
  
        dispatch(fetchUserSuccess(response.data.body));
    } catch (error) {
        dispatch(fetchUserFailure(error.message));
    }
};

export const updateUserProfile = (token, firstName, lastName) => async (dispatch) => {
  dispatch(fetchUserStart());

  try {
    const response = await axiosInstance.put('http://localhost:3001/api/v1/user/profile', { firstName, lastName }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(updateUserSuccess(response.data.body));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};

export default userSlice.reducer;
