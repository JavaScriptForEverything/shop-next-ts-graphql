import { UserDocument } from '@/shared/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch } from '.'

type InitialState = {
	loading: boolean
	error: string
	user: UserDocument | null
}

const initialState: InitialState = {
	loading: false,
	error: '',
	user: null
}

const { reducer, actions } = createSlice({
	name: 'user',
	initialState,
	reducers: {
		requested: (state) => ({
			...state,
			loading: true,
			error: ''
		}),
		failed: (state, action: PayloadAction<string>) => ({
			...state,
			loading: false,
			error: action.payload
		}),
		logedIn: (state, action: PayloadAction<UserDocument>) => ({
			...state,
			loading: false,
			user: action.payload
		})
	}
})
export default reducer


export const request = () => (dispatch: AppDispatch) => {
	dispatch(actions.requested())
}
export const failed = (message: string) => (dispatch: AppDispatch) => {
	dispatch(actions.failed(message))
}
export const logedIn = (user: UserDocument) => (dispatch: AppDispatch) => {
	dispatch(actions.logedIn(user))
}