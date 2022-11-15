import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET, 				// used to generate jwt.sign('','', secret )
	providers: [
		GitHubProvider({
			clientId: process.env.NEXT_AUTH_CLIENT_ID as string,
			clientSecret: process.env.NEXT_AUTH_CLIENT_SECRET as string
		}),

		CredentialsProvider({
			type: 'credentials',
			credentials: {},
			authorize: (credentials, req) => {
				// throw new Error('') 						// throw error or return ?
				const { email, password } = credentials as { email: string, password: string, image: string }

				// find user in database and validate here
				if( email !== 'abc@gmail.com' || password !== 'asdfasdf') 
					throw new Error('invalid credential by riaz')

				// finally return user
				return {
					id: '1',
					name: 'riajul islam',
					email: 'abc@gmail.com',
					image: 'myimage',
					role: 'admin',
				}
			}
		}), 	// end of CredentialsProvider 
	],
	pages: {
		signIn: '/login', 				// override default endpoints
		signOut: '/user/profile'
	},

	session: {
		strategy: 'jwt' 				// default
	},
	callbacks: { 							// jwt method: called whenever a JSON Web Token is created or updated
		jwt: ({ token, user }) => {

			token.role = 'admin'
			// token.role = user.role 			// add extra property into token
			return token 										// this token will be available in the middleware with withAuth HOC
		},
		session: ({ session, user, token }) => {
			// session.user.role = user.role
			return session
		}
	}
}

export default NextAuth(authOptions)



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