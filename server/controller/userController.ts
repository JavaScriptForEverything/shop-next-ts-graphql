import type { DeleteMeArgs, GetUserArgs, LoginArgs, SignUpArgs, UpdateMeArgs, UserDocument  } from '@/shared/types/user'
import User from '@/server/models/userModel'
import { GraphQLError } from 'graphql'
import { Types } from 'mongoose'





// type AppError = {
// 	Error: ({ status: string, message: string }) => void
// }

// Return value must be same as @/graphql/typeDefs/userTypeDefs types
export const getUsers = async (): Promise<UserDocument[] | Error> => {
	const users = await User.find()
	if(!users) return new Error('no user round')
	// if(!user) return new Error({ status: 'failed', message: 'No user Found'})
	
	return users
}

export const getUser = async ({ userId }: GetUserArgs) => {
	// console.log({ userId })

	// throw new Error('no user found')
	const user = await User.findById(userId)

	if(!user) throw new GraphQLError('no user found', {
		extensions: {
			code: 'MyError'
		}
	})

	return user
}


export const signUp = async({ input }: SignUpArgs): Promise<UserDocument> => {
	// console.log({ input })
	const user = await User.create(input)
	if(!user) throw new GraphQLError('No user Found', {
		extensions: {
			code: 'AppError'
		}
	})

	return user
}



export const login = async({ input }: LoginArgs): Promise<UserDocument> => {
	// input = { email, password }
	const { email, password } = input
	
	Object.entries(input).forEach(([key, value]) => {
		if(!value) throw new GraphQLError(`'${key}' field is required`)
	})
	
	
	const user = await User.findOne({ email })
	if(!user) throw new GraphQLError('No user found', {
		extensions: {
			code: 'AppError'
		}
	}) 	

	if( user.password !== password ) throw new GraphQLError('Password not matched', {
		extensions: {
			code: 'AppError'
		}
	}) 	


	return user
}

export const updateMe = ({ input }: UpdateMeArgs ): UserDocument => {
	console.log({ input })

	throw new GraphQLError('No update fetched')
}

export const deleteMe = ({ userId }: DeleteMeArgs): UserDocument => {
	console.log({ userId })

	throw new GraphQLError('No update fetched')
}