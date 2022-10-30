import { gql } from 'apollo-server-micro';

export const userTypeDefs = gql`
	extend type Query {
		users: [User!]!
		user(id: ID!): User!
	}
	extend type Mutation {
		signup(input: SignUPInput): User!
		login(input: LoginInput): User!
	}

	input SignUPInput {
		name: String!
		email: String!
		password: String!
		confirmPassword: String!
	}

	input LoginInput {
		email: String!
		password: String!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		# password: String!
		# confirmPassword: String!
		createdAt: String!
		updatedAt: String!
	}
`