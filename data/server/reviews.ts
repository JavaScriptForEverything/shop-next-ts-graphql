import type { ReviewDocument } from '@/shared/types/review';
import { Types } from 'mongoose';

export const reviews: ReviewDocument[] = [
	{
		id: '1',
		user: new Types.ObjectId(),
		// product: new Types.ObjectId(),
		product: new Types.ObjectId('6363fb5c204381fa23e112f4'),
		review: 'review one',
		liked: 0,
		disliked: 0
	},
	{
		id: '2',
		user: new Types.ObjectId(),
		product: new Types.ObjectId(),
		review: 'review one',
		liked: 0,
		disliked: 0
	},
	{
		id: '3',
		user: new Types.ObjectId(),
		product: new Types.ObjectId(),
		review: 'review one',
		liked: 0,
		disliked: 0
	},
]