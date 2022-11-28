import { gql } from 'apollo-server-micro';

/* 				(1) 			(2) 				(3) 						(4)
		createProduct(input: CreateProductInput): Product!

		1: data.createProduct 				: useMutation
		2: args.input  								: createProduct: (_, args) => args.input
		3: $input: CreateProductInput : gql`mutation addUser( $input: CreateProductInput)`
		4: Product = ProductDocument 	: type Document & ProductDocument { ... } in productSchema.ts
*/


export const productTypeDefs = gql`
	extend type Query {
		products: [Product!]!
		product(slug: String!): Product!
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
		_id: ID
		id: ID!
		name: String!
		slug: String!
		price: Float!
		quantity: Int!
		summary: String!
		description: String! 
		coverPhoto: String!
		images: [String!]
	}
`