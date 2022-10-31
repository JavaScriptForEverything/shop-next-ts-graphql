import type { CreateProductArgs, DeleteProductArgs, GetProductArgs, UpdateProductArgs } from '@/shared/types/product'

type Product = {
	id: string
	name: string
	price: number
	summary: string
	description?: string 		// ? === ! to defined optional property
}



export const getProducts = (): Product[] =>  {

	return [{
		id: '',
		name: '',
		price: +Number(32).toFixed(2),
		summary: '',
		description: ''
	}]
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