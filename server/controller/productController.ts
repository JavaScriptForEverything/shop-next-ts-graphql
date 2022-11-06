import type { 
	CreateProductArgs, 
	DeleteProductArgs, 
	GetProductArgs, 
	ProductDocument, 
	UpdateProductArgs 
} from '@/shared/types/product'
import { Product } from '../models'



export const getProducts = async (): Promise<ProductDocument[]> =>  {

	const products = await Product.find()
	
	return products
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