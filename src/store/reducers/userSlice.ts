import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";


interface userState {
    users: IUser[]
    isLoading: boolean
    error: string
    count: number
}

const initialState: userState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // increment(state, action: PayloadAction<number>) {
        //     state.count += action.payload
        // },
        // decrement(state, action: PayloadAction<number>) {
        //     state.count = action.payload
        // },
        // usersFetching(state) {
        //     state.isLoading = true
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false
        //     state.error = ''
        //     state.users = action.payload
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false
        //     state.error = action.payload
        // } // со старой саночкой
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        [fetchUsers.pending.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    } // под капотом тулкит своя санка
})

export default userSlice.reducer