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
		callbacks: { 		// to control what happens when an action is performed
			authorized: ({ req, token }) => { 	// The middleware only be invoked if callback returns true

				return token?.role === 'admin'
			}
		}
	}
)