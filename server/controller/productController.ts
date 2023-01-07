import type { 
	CreateProductArgs, 
	DeleteProductArgs, 
	GetProductArgs, 
	GetProductsArgs, 
	ProductDocument, 
	UpdateProductArgs 
} from '@/shared/types/product'
import { GraphQLError } from 'graphql'
import { Types } from 'mongoose'
import { Product } from '../models'

/*
		limit = 4
		currentPage = 1

		nextPage = skip(limit * currentPage)


*/


export const getProducts = async ({ _page = 1, _limit = 4 }: GetProductsArgs): Promise<ProductDocument[]> =>  {
	// const products = await Product.find()

	const skip = (_page - 1) * _limit

	const products = await Product.find().limit(_limit).skip(skip)

	return products
}

export const getProduct = async ({ slug }: GetProductArgs): Promise<ProductDocument> => {
	// const isId = Types.ObjectId.isValid(productId)
	// const filter = isId ? { _id: productId } : { slug: productId }

	const product= await Product.findOne({ slug })
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