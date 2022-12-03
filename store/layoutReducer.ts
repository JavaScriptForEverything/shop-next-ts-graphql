import type { ShippingInfo } from '@/shared/types/shipping';
import type { AppDispatch, RootState } from '@/store/index'
import type { ProductDocument } from '@/shared/types'
import type { ViewMode } from '@/shared/types/layout';

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addToLocal } from '../util'

// used in /components/home/rightSection/titleBar/view/index.tsx

type StateProps = {
	loading: boolean,
	error: string,
	viewMode: ViewMode,

	carts: ProductDocument[],
	shippingCharge: number,
	shippingInfo: ShippingInfo,

}
const initialState: StateProps = {
	loading: false,
	error: '',
	viewMode: 'list',

	carts: [],
	shippingCharge: 2,

	shippingInfo: {
		name: '',
		email: '',
		country: '',
		phone: '',
		address: '',
		postalCode: ''
	}
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

		setViewMode: (state, action: PayloadAction<ViewMode>) => ({
			...state,
			viewMode: action.payload
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
		setShippingCharge: (state, action: PayloadAction<number>) => ({
			...state,
			shippingCharge: action.payload
		}),

		updateShippingInfo: (state, action: PayloadAction<ShippingInfo>) => ({
			...state,
			shippingInfo: action.payload
		})
	}
})
export default reducer


export const setViewMode = (viewMode: ViewMode) => (dispatch: AppDispatch) => {
	dispatch(actions.setViewMode(viewMode))
}






// used into bellow dispatch handler
const saveCartToLocal = (getState: () => RootState) => {
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
	saveCartToLocal(getState)
}

// /pages/cart.tsx: deleteHandler
export const removeFromCarts = (cartId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
	// 1. remove from store
	dispatch(actions.removeFromCarts(cartId))

	// 2. remove from localStorage
	saveCartToLocal(getState)
}

// /pages/cart.tsx: plusHandler
export const increaseQuantity = (cartId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
	dispatch(actions.increaseQuantity(cartId))

	// 2. update to localStorage
	saveCartToLocal(getState)
}
// /pages/cart.tsx: minusHandler
export const decreaseQuantity = (cartId: string) => (dispatch: AppDispatch, getState: () => RootState) => {
	dispatch(actions.decreaseQuantity(cartId))

	// 2. update to localStorage
	saveCartToLocal(getState)
}

// /components/shipping/cartDetails.tsx: useEffect()
export const setShippingCharge = (shippingCharge: number) => (dispatch: AppDispatch) => {
	dispatch(actions.setShippingCharge(shippingCharge))
}


// step-1: /components/shipping/infoForm.tsx: changeHandler
export const updateShippingInfo = (fields: ShippingInfo) => (dispatch: AppDispatch) => {
	dispatch(actions.updateShippingInfo(fields))
}
// step-2: /pages/shipping.tsx
export const saveShippingInfoToLocal = () => (_: AppDispatch, getState: () => RootState) => {
	const shippingInfo = JSON.stringify(getState().layout.shippingInfo)
	localStorage.setItem(addToLocal('shippingInfo'), shippingInfo)
}

// /pages/shipping.tsx useEffect(() => {}, [dispatch])
export const setShippingInfoFromLocalToStore = () => (dispatch: AppDispatch) => {
	const shippingInfoStr = localStorage.getItem(addToLocal('shippingInfo'))
	if(!shippingInfoStr) return

	const shippingInfo = JSON.parse(shippingInfoStr)
	dispatch(updateShippingInfo(shippingInfo))
}

