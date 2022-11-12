import { UserDocument } from '@/shared/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
	loading: boolean
	error: string
	user: UserDocument
}

const initialState: InitialState = {
	loading: false,
	error: '',
	user: {
		id: '',
		name: '',
		email: '',
		password: '',
		createdAt: new Date(),
		updatedAt: new Date(),
	}

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
		})
	}
})
export default reducer