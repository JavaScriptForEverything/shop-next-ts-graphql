import { LoginInput, SignUpInput } from '@/graphql/resolvers/userResolvers'

type UserDocument = {
	id: string
	name: string
	email: string
	password?: string
	confirmPassword?: string
	createdAt: Date
	updatedAt: Date
}

export const getUsers = (): UserDocument[] => {
	return [
		{
			id: 'alskdfaldf',
			name: 'riajul',
			email: 'riajul@gmail.com',
			// password: 'asdfasdf',
			createdAt: new Date(),
			updatedAt: new Date()
		}
	]
}

export const getUser = (userId: number): UserDocument => {
	return {
		id: 'alskdfaldf',
		name: 'riajul',
		email: 'riajul@gmail.com',
		// password: 'asdfasdf',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}

export const signUp = ( input: SignUpInput ): UserDocument => {
	console.log({ input })

	return {
		id: 'alskdfaldf',
		name: 'riajul',
		email: 'riajul@gmail.com',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}

export const login = ( input: LoginInput ): UserDocument => {
	console.log({ input })

	return {
		id: 'alskdfaldf',
		name: 'riajul',
		email: 'riajul@gmail.com',
		createdAt: new Date(),
		updatedAt: new Date()
	}
}