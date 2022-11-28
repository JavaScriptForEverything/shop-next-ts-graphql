import type { AppDispatch, RootState } from '@/store/index'
import type { ProductDocument } from '@/shared/types'

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addToLocal } from '../util';

type StateProps = {
	loading: boolean,
	error: string,
	carts: ProductDocument[]
}
const initialState: StateProps = {
	loading: false,
	error: '',
	carts: []
}

const { reducer, actions } = createSlice({
	name: 'layout',
	initialState,
	reducers: {
		requested: (state) => ({
			...state,
			loading: true,
			error: '',
		}),
		failed: (state, action: PayloadAction<string>) => ({
			...state,
			loading: false,
			error: action.payload
		}),

		getCarts: (state, action: PayloadAction<ProductDocument[]>) => ({
			...state,
			loading: false,
			carts: action.payload
		}),
		addToCart: (state, action: PayloadAction<ProductDocument>) => ({
			...state,
			loading: false,
			carts: [ ...state.carts, action.payload ]
		}),
		removeFromCarts: (state, action: PayloadAction<string>) => ({
			...state,
			loading: false,
			carts: state.carts.filter(cart => cart.id !== action.payload)
		}),
		increaseQuantity: (state, action: PayloadAction<string>) => ({
			...state,
			loading: false,
			carts: state.carts.map(cart => {
				if(cart.quantity >= 10) return cart

				return (cart.id === action.payload) 
					? { ...cart, quantity: cart.quantity + 1 }  
					: cart 
			})
		}),
		decreaseQuantity: (state, action: PayloadAction<string>) => ({
			...state,
			loading: false,
			carts: state.carts.map(cart => {
				if(cart.quantity <= 1) return cart

				return (cart.id === action.payload) 
					? { ...cart, quantity: cart.quantity - 1 }  
					: cart 
			})
		}),
	}
})
export default reducer

// /layout/header.tsx
const saveToLocal = (getState: () => RootState) => {
	const getCarts = JSON.stringify(getState().layout.carts)
	localStorage.setItem(addToLocal('carts'), getCarts)
}

// /layout/header.tsx
export const getCarts = () => (dispatch: AppDispatch) => {
	const cartsString = localStorage.getItem(addToLocal('carts'))
	if(!cartsString) return

	const carts = JSON.parse(cartsString)
	dispatch(actions.getCarts(carts))
}

// /components/home/rightSection/product/grid.tsx
export const addToCart = (product: ProductDocument) => (dispatch: AppDispatch, getState: () => RootState ) => {
	dispatch(actions.requested())

	const findCart = getState().layout.carts.find(cart => cart.id === product.id)
	if(findCart) {
		dispatch(actions.failed(`product: '${product.name}' is already exists`))
		return
	}

	// 1. save in store
	dispatch(actions.addToCart(product))

	// 2. save in localStorage.carts
	saveToLocal(getState)
}

// /pages/cart.tsx: deleteHandler
export const removeFromCarts = (cartId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
	// 1. remove from store
	dispatch(actions.removeFromCarts(cartId))

	// 2. remove from localStorage
	saveToLocal(getState)
}

// /pages/cart.tsx: plusHandler
export const increaseQuantity = (cartId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
	dispatch(actions.increaseQuantity(cartId))

	// 2. update to localStorage
	saveToLocal(getState)
}
// /pages/cart.tsx: minusHandler
export const decreaseQuantity = (cartId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
	dispatch(actions.decreaseQuantity(cartId))

	// 2. update to localStorage
	saveToLocal(getState)
}