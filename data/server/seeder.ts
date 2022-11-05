import dotEnv from 'dotenv'
dotEnv.config({ path: '.env.local'}) 	// must import very beging before dbConnect

import { dbConnect } from '../../server/models/database'

import type { UserDocument, ProductDocument, ReviewDocument } from '@/shared/types'
import { users, products, reviews } from './index'
import { User, Product, Review } from '../../server/models'


dbConnect();

const InsertHandler = async <T>(name: string, Model: any, data: T[]) => {

	await Model.deleteMany() 	// delete old data first then import new data

	const doc = await Model.create(data)
	console.log(doc)

	console.log(`---------[ importing ${name} success ]----------`) 
}

const readDocs = async (Model: any, name='users') => {
	const users = await Model.find()
	console.log({ users })
	console.log(`---------[ reading ${name} success ]----------`) 
}

// InsertHandler<UserDocument>('users', User, users)
// InsertHandler<ProductDocument>('products', Product, products)
// InsertHandler<ReviewDocument>('reviews', Review, reviews)



export {}

const [,, operation, collection ] = process.argv
// console.log({ operation, collection })


if(operation === '--import') {
	if(collection === 'users') 		InsertHandler<UserDocument>('users', User, users)
	if(collection === 'products') InsertHandler<ProductDocument>('products', Product, products)
	if(collection === 'reviews') 	InsertHandler<ReviewDocument>('reviews', Review, reviews)

	if(!collection) {
		InsertHandler<UserDocument>('users', User, users)
		InsertHandler<ProductDocument>('products', Product, products)
		InsertHandler<ReviewDocument>('reviews', Review, reviews)
	}

} else {
	if(operation === '--users') 		readDocs(User, 'users')
	if(operation === '--products') 	readDocs(Product, 'products')
	if(operation === '--reviews') 	readDocs(Review, 'reviews')

	if( operation !== '--users' && operation !== '--products' && operation !== '--reviews') {
		readDocs(User, 'users')
		readDocs(Product, 'producs')
		readDocs(Review, 'reviews')
	}
}


/* 
		$ yarn seeder 										=> Read all 3 collections (users, products, reviews)
		$ yarn seeder --users 						=> 	" 	Only users collection
		$ yarn seeder --products 					=> 	" 		"  products 	"
		$ yarn seeder --reviews 					=>  " 		"  reviews  	"

		$ yarn seeder --import         		=> Import All 3 collections	
		$ yarn seeder --import users 			=> 		" 	" 	users  		"
		$ yarn seeder --import products 	=> 		" 	" 	products  "
		$ yarn seeder --import reviews 		=> 		" 	" 	reviews  	"

*/


