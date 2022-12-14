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