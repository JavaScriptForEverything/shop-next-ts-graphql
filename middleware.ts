import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const middleware = (req: NextRequest) => {
	console.log('middleware') 	// check only run on 	config.matcher

	if(req.nextUrl.pathname.startsWith('/user')) {
		const logedIn = false
		if(!logedIn) return NextResponse.redirect(new URL('/login', req.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: '/user/(.*)', 					
}