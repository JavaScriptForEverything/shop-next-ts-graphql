import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import layoutReducer from './layoutReducer'
import userReducer from './userReducer'
import productReducer from './productReducer'

const reducers = combineReducers({
	layout: layoutReducer,
	user: userReducer,
	product: productReducer,
})

/* Why we need this masterReducer ?
		When we dispatch from ServerSide. console.log(action.payload) shows value gots but in
		redux store those value don't saved.
		 
		Because in Next.js page re-built on every page navigation, so server don't know about
		client store. [ Redux Store is clientSide Store ]

		So some how server need to know the client's store and save those store value in memory
		and add new value with that and when send new built-ed page, it send modified store to client

		This way client got data with ServerSide data.
			. in client's perpective only new data added, but in reality is on every new request
				server create new store from client's store and send that store by modifing.
*/
const masterReducer = (state: any, action: any) => {
	return (action.type === HYDRATE) ? {
		...state,
		layout: {
			...state.layout,
			layout: { ...state.layout.layout, ...action.payload.layout.layout }
		},
		user: {
			...state.user,
			user: { ...state.user.user, ...action.payload.user.user }
		},
		product: {
			...state.product,
			products: action.payload.product.products 
			// products: [ ...state.product.products, ...action.payload.product.products ] // if copy old data then it add 4 * data
		}
	} : reducers(state, action)
}


const makeStore = () => configureStore({
	reducer: masterReducer
	// reducer: reducers,
	// reducer: {
	// 	layout: layoutReducer,
	// 	user: userReducer,
	// 	product: productReducer,
	// }
})
export const wrapper = createWrapper(makeStore, { debug: false })

type Store = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof reducers>
// export type RootState = ReturnType<Store['getState']>
export type AppDispatch = Store['dispatch']