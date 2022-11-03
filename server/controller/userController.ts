import type { DeleteMeArgs, GetUserArgs, LoginArgs, SignUpArgs, UpdateMeArgs, UserDocument  } from '@/shared/types/user'
import User from '@/server/models/userModel'
import { GraphQLError } from 'graphql'





// type AppError = {
// 	Error: ({ status: string, message: string }) => void
// }

// Return value must be same as @/graphql/typeDefs/userTypeDefs types
export const getUsers = async (): Promise<UserDocument[] | Error> => {
	const user = await User.findOne()
	if(!user) return new Error('no user round')
	// if(!user) return new Error({ status: 'failed', message: 'No user Found'})
	
	return [
		{
			id: '1',
			name: 'riajul',
			email: 'riajul@gmail.com',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: '2',
			name: 'fiaz',
			email: 'fiaz@gmail.com',
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			id: '3',
			name: 'ayan',
			email: 'ayan@gmail.com',
			createdAt: new Date(),
			updatedAt: new Date()
		}
	]
}

export const getUser = ({ userId }: GetUserArgs) => {
	// console.log({ userId })

	// throw new Error('no user found')

	const user = 0
	if(!user) throw new GraphQLError('no user found', {
		extensions: {
			code: 'MyError'
		}
	})


	return {
		id: '2',
		// name: 'riajul',
		email: 'riajul@gmail.com',
		// password: 'asdfasdf',
		// createdAt: new Date(),
		// updatedAt: new Date()
	}
}


export const signUp = ({ input }: SignUpArgs): UserDocument => {
	console.log({ input })

	return {
		id: 'alskdfaldf',
		createdAt: new Date(),
		updatedAt: new Date(),
		// name: 'riajul',
		// email: 'riajul@gmail.com',
		...input
	}
}



export const login = ({ input }: LoginArgs) => {
	console.log({ input })
	
	const user = 1
	if(!user) throw new GraphQLError('Something is wrong') 	

	return {
		id: 'alskdfaldf',
		createdAt: new Date(),
		updatedAt: new Date(),
		name: 'riajul',
		// email: 'riajul@gmail.com',
		...input
	}
}

export const updateMe = ({ input }: UpdateMeArgs ): UserDocument => {
	console.log({ input })

	return {
		id: 'alskdfaldf',
		name: 'riajul',
		email: 'riajul@gmail.com',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}

export const deleteMe = ({ userId }: DeleteMeArgs): UserDocument => {
	console.log({ userId })

	return {
		id: 'alskdfaldf',
		name: 'riajul',
		email: 'riajul@gmail.com',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}