import { gql } from 'apollo-server-micro'

import { userTypeDefs } from '@/graphql/typeDefs/userTypeDefs'


const defaultTypeDefs = gql`
	type Query {
		_: String
	}
	type Mutation {
		_: String
	}
`

export const typeDefs = [
	defaultTypeDefs,
	userTypeDefs
]