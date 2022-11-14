import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
// import { withAuth } from 'next-auth/middleware'

export const config = {
	matcher: '/user/(.*)', 					
}

export const middleware = (req: NextRequest) => {
	console.log('middleware')

	// if(req.nextUrl.pathname.startsWith('/user')) {
	// 	const authenticated = false
	// 	if(!authenticated) return NextResponse.redirect(new URL('/login', req.url))
	// }

	return NextResponse.next()
}



// export default withAuth((req) => {
// 	console.log({ token: req.nextauth.token })

// 	if(req.nextUrl.pathname.startsWith('/user')) {
// 		const logedIn = false
// 		if(!logedIn) return NextResponse.redirect(new URL('/login', req.url))
// 	}

// 	return NextResponse.next()
// })