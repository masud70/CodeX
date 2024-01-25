import { createSlice } from '@reduxjs/toolkit';
import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';
import { toast } from 'react-toastify';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: hasCookie('codex@token'),
        token: getCookie('codex@token'),
        user: {},
    },
    reducers: {
        login: (state, action) => {
            state.status = true;
            if (action.payload.user) {
                state.user = action.payload.user;
            }
            if (action.payload.token) {
                state.token = action.payload.token;
                setCookie('codex@token', action.payload.token);
            }
            toast.success('Login successful.');
        },

        logout: (state) => {
            deleteCookie('codex@token');
            state.status = false;
            state.user = {};
            toast.success('Logout successful.');
        },

        setAuthUserData: (state, action) => {
            if (action.payload.user) {
                state.userData = action.payload.user;
            }
        },
    },
});

export const { login, logout, setAuthUserData } = authSlice.actions;
export default authSlice.reducer;
