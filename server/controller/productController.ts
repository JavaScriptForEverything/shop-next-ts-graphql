import type { 
	CreateProductArgs, 
	DeleteProductArgs, 
	GetProductArgs, 
	ProductDocument, 
	UpdateProductArgs 
} from '@/shared/types/product'
import { GraphQLError } from 'graphql'
import { Types } from 'mongoose'
import { Product } from '../models'



export const getProducts = async (): Promise<ProductDocument[]> =>  {

	const products = await Product.find()
	
	return products
}

export const getProduct = async ({ productId }: GetProductArgs): Promise<ProductDocument> => {
	const isId = Types.ObjectId.isValid(productId)
	const filter = isId ? { _id: productId } : { slug: productId }

	const product= await Product.findOne(filter)
	if(!product) throw new GraphQLError('No product found')

	return product
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