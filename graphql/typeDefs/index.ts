import { gql } from 'apollo-server-micro'

import { productTypeDefs } from './productTypeDefs'
import { reviewTypeDefs } from './reviewTypeDefs'
import { userTypeDefs } from './userTypeDefs'


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
	userTypeDefs,
	productTypeDefs,
	reviewTypeDefs
]