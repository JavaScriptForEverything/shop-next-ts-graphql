import { gql } from '@apollo/client'

// getUsers => userTpeDefs.users
export const GET_USERS = gql`
	query getUsers {
		users {
			id
			name
			email
		}
	}
`

// getUser => userTpeDefs.user
export const GET_USER = gql`
	query getUser($userId: ID!) {
		user(userId: $userId) {
			id
			name
			email
		}
	}
`

// login => userTpeDefs.login
export const MUTATION_LOGIN = gql`
	mutation login($input: LoginInput) { 		
		login(input: $input) {
			id
			name
			email
		}
	}
`

// singup => userTpeDefs.signup
export const MUTATION_SIGNUP = gql`
	mutation signup($input: SignUPInput) {
		signup(input: $input) {
			id
			name
			email
		}
	}
`