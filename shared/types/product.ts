import { Types } from 'mongoose'

export type ProductDocument = {
	_id?: Types.ObjectId
	id: string
	name: string
	slug?: string
	price: number
	summary: string
	description: string
	coverPhoto: string
	images: string[]
	quantity: number,
	rating?: number
}

type CreateProductInput = {
	name: string
	price: number
	summary: string
	description: string 		// ? === ! to defined optional property
}
type UpdateProductInput = {
	productId: string
	name: string
	price: number
	summary: string
	description: string 		// ? === ! to defined optional property
}

type Search = 'name' | 'slug'
export type GetProductsArgs = {
	_page: number,
	_limit: number,
	_search: [Search, string],
	_sort: string
}
export type GetProductArgs = {
	slug: string
}
export type CreateProductArgs = {
	input: CreateProductInput
}
export type UpdateProductArgs = {
	input: UpdateProductInput
}
export type DeleteProductArgs = {
	productId: string
}