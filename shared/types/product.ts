
export type ProductDocument = {
	id: string
	name: string
	price: number
	summary: string
	description: string
	coverPhoto: string
	images: string[]
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
	productId: string
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