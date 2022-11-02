export {}

/*
// method-1: Synchronous handler
const catchAsync = <T>(callback: Function) => {

	return (input: T) => {

		console.log({ input })

		try {
			return callback(input)
		} catch (error: any) {

			return {
				id: '',
				createdAt: new Date(),
				updatedAt: new Date(),
				name: error.message,
				email: '',
			}
		}
	}
}

// method-2: Asynchronous handler
const catchAsync = (callback: Function) => {
	return (input: any) => {
		return callback(input).catch( (error: any) => ({
			id: '',
			createdAt: new Date(),
			updatedAt: new Date(),
			name: error.message,
			email: '',
		}))
	}
}

// Remove async to work as Synchronous
export const login = catchAsync( async({ input }: LoginArgs) => {
	console.log({ input })
	
	// const user = {}
	const user = false
	if(!user) throw new GraphQLError('Something is wrong')

	return {
		id: 'alskdfaldf',
		createdAt: new Date(),
		updatedAt: new Date(),
		name: 'riajul',
		// email: 'riajul@gmail.com',
		...input
	}
})


*/