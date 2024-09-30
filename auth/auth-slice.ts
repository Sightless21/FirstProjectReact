import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux-toolkit/store';

// Define a type for the slice state
interface AuthState {
  isLogin:boolean;
  isLoading:boolean;
  profile: any | null;
}

// Define the initial state using that type
const initialState: AuthState = {
    isLogin: false,
    isLoading: false,
    profile: null
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsLogin(state, action:PayloadAction<any|null>){
        state.isLogin = action.payload; // update global state
    },
    setIsLoading(state, action:PayloadAction<any|null>){
        state.isLoading = action.payload; // update global state
    },
    setProfile(state, action:PayloadAction<any|null>){
      state.profile = action.payload; // update global state
  }
  },
})

export const { setIsLogin, setIsLoading, setProfile} = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuthState = (state: RootState) => state.authsState;

export default authSlice.reducer