import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ProductDocument } from '@/shared/types'
import { AppDispatch } from '.'

type InitialState = {
	loading: boolean,
	error: string,
	products: ProductDocument[]
}

const initialState: InitialState = {
	loading: false,
	error: '',
	products: []
}

const { reducer, actions } = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProducts: (state, action: PayloadAction<ProductDocument[]>) => {

			return {
				...state,
				loading: false,
				error: '',
				products: action.payload
			}
		},
	},
})
export default reducer

export const addProducts = (products: ProductDocument[]) => (dispatch: AppDispatch) => {
	dispatch(actions.addProducts(products))
}