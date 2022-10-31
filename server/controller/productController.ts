import type { CreateProductArgs, DeleteProductArgs, GetProductArgs, UpdateProductArgs } from '@/shared/types/product'

export type ProductDocument = {
	id: string
	name: string
	price: number
	summary: string
	description?: string 		// ? === ! to defined optional property
}



export const getProducts = (): ProductDocument[] =>  {

	return [
		{
			id: '1',
			name: 'product name 1',
			price: +Number(30).toFixed(2),
			summary: '',
			description: ''
		},
		{
			id: '2',
			name: 'product name 2',
			price: +Number(42).toFixed(2),
			summary: '',
			description: ''
		},
		{
			id: '3',
			name: 'product name 3',
			price: +Number(82).toFixed(2),
			summary: '',
			description: ''
		},
]
}

export const getProduct = ({ productId }: GetProductArgs) => {
	console.log({ productId })

	return {
		id: '',
		name: '',
		price: +Number(32).toFixed(2),
		summary: '',
		description: ''
	}
}

export const createProduct = ({ input }: CreateProductArgs) => {
	console.log({ input })

	return {
		id: '',
		name: '',
		price: +Number(32).toFixed(2),
		summary: '',
		description: ''
	}
}

export const updateProduct = ({ input }: UpdateProductArgs ) => {
	console.log({ input })

	return {
		id: '',
		name: '',
		price: +Number(32).toFixed(2),
		summary: '',
		description: ''
	}

}

export const deleteProduct = ({ productId }: DeleteProductArgs) => {
	console.log({ productId })

	return {
		id: '',
		name: '',
		price: +Number(32).toFixed(2),
		summary: '',
		description: ''
	}

}