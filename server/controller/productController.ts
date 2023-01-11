import type { 
	CreateProductArgs, 
	DeleteProductArgs, 
	GetProductArgs, 
	GetProductsArgs, 
	ProductDocument, 
	UpdateProductArgs 
} from '@/shared/types/product'
import { GraphQLError } from 'graphql'
import type { FilterQuery } from 'mongoose'
import { Product } from '../models'


const apiFeatures = function(Query: FilterQuery<ProductDocument>, args: GetProductsArgs ) {
	const { _limit = 6, _page = 1, _search, _sort } = args || {}

	let query = Query.find()

	// 1. find by slug
	if(_search) {
		const [ searchField, searchValue ] = _search
		// const products = await Product.find({ [searchField]: searchValue }) 	// 100% match
		query = Query.find({ [searchField]: { 												// RegEx match
			$regex: searchValue, $options: 'i'
		}})
	}

	// 2. sorting by fields
	if(_sort) {
		const sortStr = _sort.replaceAll(',', ' ')
		query = Query.find().sort(sortStr)
	}

	// 3. pagination
	if(!_search) {
		const skip = (_page - 1) * _limit
		query = Query.find().limit(_limit).skip(skip)
	}


	return query
}



/* Client:
uery getProducts($limit: Int, $page: Int, $search: [String], $sort: String) {
  products (_limit: $limit, _page: $page, _search: $search, _sort: $sort) {
    id
    name
    slug
  }
}


Variables:
{
  "limit": 4,
  "page": 2,
  "sort": "-createdAt name",
  "slug": "dolorem-qui-eum-facilis-quibusdam",
  // "search": ["slug", "quibusdam-ea-quo-vitae-m"]
}
*/

export const getProducts = async (args: GetProductsArgs): Promise<ProductDocument[]> =>  {
	return await apiFeatures(Product.find(), args)
	// const products = await Product.find()

	const { _limit = 4, _page = 1, _search, _sort } = args || {}

	// 1. pagination
	const skip = (_page - 1) * _limit
	// let products = await Product.find().limit(_limit).skip(skip)
	// const products = await apiFeatures(Product.find(), args)

	// // 2. find by slug
	// if(_search) {
	// 	const [ searchField, searchValue ] = _search
	// 	// const products = await Product.find({ [searchField]: searchValue }) 	// 100% match
	// 	products = await Product.find({ [searchField]: { 												// RegEx match
	// 		$regex: searchValue, $options: 'i'
	// 	}})
	// }

	// 3. sorting by fields
	// if(_sort) {
	// 	const sortStr = _sort.replaceAll(',', ' ')
	// 	products = await Product.find().sort(sortStr)
	// }


	// return products
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