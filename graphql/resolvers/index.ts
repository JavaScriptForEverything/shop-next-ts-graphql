import { userResolvers } from '@/graphql/resolvers/userResolvers';
import { productResolvers } from './productResolvers';
import { reviewResolvers } from './reviewResolvers';

export const resolvers = [
	userResolvers,
	productResolvers,
	reviewResolvers
]