import { userResolvers } from '@/graphql/resolvers/userResolvers';
import { productResolvers } from './productResolvers';

export const resolvers = [
	userResolvers,
	productResolvers
]