import { gql } from 'apollo-server-micro';

/* 		(1) 	(2) 		(3) 				(4)
		signup(input: SignUPInput): User!

		1: data.signup 								: useQuery() or useMutation
		2: args.input  								: signup: (_, args) => args.input
		3: $input: SignUPInput  			: gql`mutation addUser( $input: SignupInput)`
		4: User = UserDocument 				: type Document & UserDocument { ... } in userSchema.ts
*/


export const userTypeDefs = gql`
	extend type Query {
		users: [User!]!
		user(userId: ID!): User!
	}
	extend type Mutation {
		signup(input: SignUPInput): User!
		login(input: LoginInput): User!
		updateMe(input: UpdateMeInput): User!
		deleteMe(userId: ID!): User
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

	input UpdateMeInput {
		userId: ID!
		name: String
	}

	type User {
		_id: ID!
		name: String!
		email: String!
		password: String!
		createdAt: String!
		updatedAt: String!

		avatar: Image!
		title: String
		about: String
		skills: [String]
		infoItems: [InfoItem],
		experiences: [Experience]
	}

	type Image {
		public_id: String
		secure_url: String
		alt: String
		size: String
	}
	type InfoItem {
		_id: ID!
		id: String
		name: String
		value: String
	}
	type Experience {
		_id: ID!
		id: String
		title: String
		companyName: String
		joiningDate: String 					# Date
		currentStatus: String 				# active | inactive
		jobLocation: String
		logoBackgroundColor: String
	}

	# type CurrentStatus {
	# 		type: String,
	# 		enum: ['active', 'inactive']
	# }
`