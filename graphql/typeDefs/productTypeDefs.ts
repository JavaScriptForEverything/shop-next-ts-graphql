import { gql } from 'apollo-server-micro';

export const productTypeDefs = gql`
	extend type Query {
		products: [Product!]!
		product(productId: ID!): Product!
	}
	extend type Mutation {
		createProduct(input: CreateProductInput): Product!
		updateProduct(input: UpdateProductInput): Product!
		deleteProduct(productId: ID!): Product
	}

	input CreateProductInput {
		name: String!
		price: Float!
		summary: String!
		description: String 	
	}
	input UpdateProductInput {
		productId: ID!
		name: String!
		price: Float!
		summary: String!
		description: String 	
	}

	type Product {
		id: ID!
		name: String!
		price: Float!
		summary: String!
		description: String 		# optional  and ! = Not-Nullable === Required
	}
`