import dotEnv from 'dotenv'
dotEnv.config({ path: '.env.local'})
// must import very beging...

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

const getUsers = async () => {
	const users = await User.find()
	console.log({ users })
}

InsertHandler<UserDocument>('users', User, users)
InsertHandler<ProductDocument>('products', Product, products)
InsertHandler<ReviewDocument>('reviews', Review, reviews)
// getUsers()

