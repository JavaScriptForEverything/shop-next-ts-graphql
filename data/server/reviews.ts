import type { ReviewDocument } from '@/shared/types/review';
import { Types } from 'mongoose';

export const reviews: ReviewDocument[] = [
	{
		_id: new Types.ObjectId(),
		user: new Types.ObjectId(),
		product: new Types.ObjectId('6363fb5c204381fa23e112f4'),
		review: 'general produce accept farther path balloon flag wild pupil lie able brother exclaimed leave sold effort drove actual right stepped active choice important separate',
		liked: 73,
		disliked: 0,
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: new Types.ObjectId(),
		user: new Types.ObjectId(),
		product: new Types.ObjectId(),
		review: 'monkey stone saddle game twelve needle sister ago black wheat getting signal tall must moment put coast news heavy huge grabbed harbor snow stopped',
		liked: 61,
		disliked: 0,
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		_id: new Types.ObjectId(),
		user: new Types.ObjectId(),
		product: new Types.ObjectId(),
		review: 'beat young beautiful inside trade instant spider probably famous top sheet women create smallest curve right did whatever enter excitement doing clothing increase troops',
		liked: 16,
		disliked: 0,
		createdAt: new Date(),
		updatedAt: new Date(),
	},
]