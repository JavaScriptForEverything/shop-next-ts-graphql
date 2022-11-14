// export { default } from 'next-auth/middleware'

import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export const config = {
	matcher: '/user/:path*'
}


export default withAuth(
	// 1. regular middleware function
	function middleware(req) {

		return NextResponse.next()
	}, {
	// 2. options which can be set in the NextAuth({...})
		callbacks: {
			authorized: ({ req, token }) => { 		// if true then run middleware (1)
				// return true

				return token?.role === 'admin'
			}
		}
	}
)