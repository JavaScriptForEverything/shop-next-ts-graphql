import { gql } from '@apollo/client'

// getUsers => userTpeDefs.users
export const GET_USERS = gql`
	query getUsers {
		users {
			id
			name
			email
			password 
			createdAt
			updatedAt
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
			_id
			name
			email
			password
			createdAt
			updatedAt
			title
			about
			skills
			avatar {
				public_id
				secure_url
				alt
				size
			}
			infoItems {
				_id
				name
				value
			}
			experiences {
				_id
				id
				title
				companyName
				joiningDate
				currentStatus
				jobLocation
				logoBackgroundColor
			}
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