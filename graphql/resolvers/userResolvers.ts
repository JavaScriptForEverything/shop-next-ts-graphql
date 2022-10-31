import * as userController from '@/server/controller/userController'
import { DeleteMeArgs, GetUserArgs, LoginArgs, SignUpArgs, UpdateMeArgs } from '@/shared/types/user'




export const userResolvers = {
	Query: {
		users: () => userController.getUsers(),
		user: (_: undefined, args: GetUserArgs) => userController.getUser(args)
	},
	Mutation: {
		signup: (_: undefined, args: SignUpArgs) => userController.signUp(args),
		login: (_: undefined, args: LoginArgs) => userController.login(args),
		updateMe: (_: undefined, args: UpdateMeArgs) => userController.updateMe(args),
		deleteMe: (_: undefined, args: DeleteMeArgs) => userController.deleteMe(args)
	}
}
