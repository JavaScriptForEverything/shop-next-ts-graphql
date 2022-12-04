import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ProductDocument } from '@/shared/types'
import { AppDispatch, RootState } from '.'

type InitialState = {
	loading: boolean,
	error: string,
	products: ProductDocument[],
	product: ProductDocument
}

const initialState: InitialState = {
	loading: false,
	error: '',
	products: [],
	product: {
    id: '',
    name: '',
    slug: '',
    price: 0,
    summary: '',
    description: '',
    coverPhoto: '',
    images: [''],
    quantity: 1,
    rating: 0,
	}
}

const { reducer, actions } = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addProducts: (state, action: PayloadAction<ProductDocument[]>) => ({
			...state,
			loading: false,
			error: '',
			products: action.payload
		}),
		addProduct: (state, action: PayloadAction<ProductDocument>) => ({
			...state,
			loading: false,
			error: '',
			product: action.payload
		}),

		increaseQuantity: (state) => ({
			...state,
			product: {
				...state.product,
				quantity: state.product.quantity + 1
			}
		}),
		decreaseQuantity: (state) => ({
			...state,
			product: {
				...state.product,
				quantity: state.product.quantity - 1
			}
		}),
	},
})
export default reducer

// /pages/index.tsx : getServerSideProps
export const addProducts = (products: ProductDocument[]) => (dispatch: AppDispatch) => {
	dispatch(actions.addProducts(products))
}

// /pages/product/[slug].tsx : getServerSideProps
export const addProduct = (product: ProductDocument) => (dispatch: AppDispatch) => {
	dispatch(actions.addProduct(product))
}


export const increaseQuantity = () => (dispatch: AppDispatch, getState: () => RootState) => {
	if(getState().product.product.quantity >= 10) return
	dispatch(actions.increaseQuantity())
}
export const decreaseQuantity = () => (dispatch: AppDispatch, getState: () => RootState) => {
	if(getState().product.product.quantity <= 1) return
	dispatch(actions.decreaseQuantity())
}