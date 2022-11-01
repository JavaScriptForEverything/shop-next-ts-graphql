import type { DeleteMeArgs, GetUserArgs, LoginArgs, SignUpArgs, UpdateMeArgs  } from '@/shared/types/user'

export type UserDocument = {
	id: string
	name: string
	email: string
	password?: string
	confirmPassword?: string
	createdAt: Date
	updatedAt: Date
}

// Return value must be same as @/graphql/typeDefs/userTypeDefs types
export const getUsers = (): UserDocument[] => {
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

export const getUser = ({ userId }: GetUserArgs): UserDocument => {
	console.log({ userId })

	return {
		id: userId,
		name: 'riajul',
		email: 'riajul@gmail.com',
		// password: 'asdfasdf',
		createdAt: new Date(),
		updatedAt: new Date()
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

export const login = ({ input }: LoginArgs): UserDocument => {
	console.log({ input })

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