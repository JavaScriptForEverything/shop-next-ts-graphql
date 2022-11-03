import dotEnv from 'dotenv'
dotEnv.config({ path: '.env.local'})
// must import very beging...

import { dbConnect } from '../../server/models/database'

import { UserDocument } from '@/shared/types/user'
import { ProductDocument } from '@/shared/types/product'

import User from '../../server/models/userModel'
import Product from '../../server/models/productModel'
import Review from '../../server/models/reviewModel'

import { users } from './users'
import { products } from './products'
import { reviews } from './reviews'
import { ReviewDocument } from '@/shared/types/review'

dbConnect();

const InsertHandler = async <T>(name: string, Model: any, data: T[]) => {
	await Model.deleteMany()
	const doc = await Model.create(data)
	console.log(doc)

	console.log(`---------[ import ${name} success ]----------`) 
	process.exit()
}

const getUsers = async () => {
	const users = await User.find()
	console.log({ users })
}

// InsertHandler<UserDocument>('users', User, users)
// InsertHandler<ProductDocument>('products', Product, products)
InsertHandler<ReviewDocument>('reviews', Review, reviews)
// getUsers()

