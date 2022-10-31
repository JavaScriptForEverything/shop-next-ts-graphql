import { ReviewDocument } from '@/server/controller/reviewController'
import { useQuery } from '@apollo/client'
import { GET_REVIEWS } from '@/graphql/query/review'


type GetReviewsQuery = {
	reviews: ReviewDocument[]
}
const ReviewHome = () => {
	const { data } = useQuery<GetReviewsQuery>(GET_REVIEWS)

	return (
		<>
			<h2>Review Home Page</h2>

			<pre>
				{JSON.stringify(data?.reviews, null, 2)}
			</pre>
		</>
	)
}
export default ReviewHome
