import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import layoutReducer from './layoutReducer'
import userReducer from './userReducer'

const makeStore = () => configureStore({
	reducer: {
		layout: layoutReducer,
		user: userReducer,
	}
})
export const wrapper = createWrapper(makeStore)

type Store = ReturnType<typeof makeStore>
export type RootState = ReturnType<Store['getState']>
export type AppDispatch = Store['dispatch']