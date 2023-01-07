import * as productController from '@/server/controller/productController'
import { 
	CreateProductArgs, 
	DeleteProductArgs, 
	GetProductArgs, 
	GetProductsArgs, 
	UpdateProductArgs 
} from '@/shared/types/product'


export const productResolvers = {
	Query: {
		products: (_:undefined, args: GetProductsArgs) => productController.getProducts(args),
		product: (_: undefined, args: GetProductArgs) => productController.getProduct(args),
	},
	Mutation: {
		createProduct: (_: undefined, args: CreateProductArgs) => productController.createProduct(args),
		updateProduct: (_: undefined, args: UpdateProductArgs) => productController.updateProduct(args),
		deleteProduct: (_: undefined, args: DeleteProductArgs) => productController.deleteProduct(args)
	}
}