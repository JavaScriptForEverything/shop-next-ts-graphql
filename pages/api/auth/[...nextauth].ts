import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
	providers: [
		GitHubProvider({
			clientId: process.env.NEXT_AUTH_CLIENT_ID as string,
			clientSecret: process.env.NEXT_AUTH_CLIENT_SECRET as string
		})
	]
})



// const authOptions: NextAuthOptions = {
// 	session: {
// 		strategy: 'jwt',
// 	},
// 	providers: [
// 		CredentialsProvider({
// 			type: 'credentials',
// 			credentials: {
// 			},
// 			authorize: (credentials, req) => {
// 				// throw new Error('') 						// throw error or return ?
// 				const { email, password } = credentials as { email: string, password: string }

// 				// find user in database and validate here
// 				if( email !== 'abc@gmail.com' || password !== 'asdfasdf') 
// 					throw new Error('invalid credential by riaz')

// 				// finally return user
// 				return {
// 					id: '1',
// 					name: 'riajul islam',
// 					email: 'abc@gmail.com',
// 				}

// 			}
// 		})
// 	],
// 	pages: {
// 		signIn: '/login' 								// override default signIn route
// 	}
// }
// export default NextAuth(authOptions)