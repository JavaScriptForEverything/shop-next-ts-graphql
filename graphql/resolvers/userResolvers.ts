import * as userController from '@/server/controller/userController'

type GetUserArgs = {
	id: number
}

export type SignUpInput = {
	name: string
	email: string
	password: string
	confirmPassword: string
}

export type LoginInput = {
	email: string
	password: string
}


type SignUpArgs = {
	input: SignUpInput
}
type LoginArgs = {
	input: LoginInput
}




export const userResolvers = {
	Query: {
		users: () => userController.getUsers(),
		user: (_: undefined, args: GetUserArgs) => userController.getUser(args.id)
	},
	Mutation: {
		signup: (_: undefined, args: SignUpArgs) => userController.signUp(args.input),
		login: (_: undefined, args: LoginArgs) => userController.login(args.input),
	}
}
