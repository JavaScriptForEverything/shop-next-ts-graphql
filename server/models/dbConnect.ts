import mongoose from 'mongoose'


if(!process.env.MONGODB_URI) {
	throw new Error('Please add your MONGODB_URI to .env.local')
}

const MONGODB_URI: string = process.env.MONGODB_URI
console.log({ MONGODB_URI })

let globalWithMongoose = global as typeof globalThis & { mongoose: any }

let cached = globalWithMongoose.mongoose
if(!cached) cached = globalWithMongoose.mongoose = { conn: null, promise: null }


// Note: Always connect in API page, not Normal Page, else it throw Error of missing `MONGODB_URI`
export const dbConnect = async () => {

	if(cached.conn) return cached.conn

	if(!cached.promise) {
		const options = { bufferCommands: false }

		cached.promise = mongoose.connect(MONGODB_URI, options)
	}

	cached.conn = await cached.promise
}