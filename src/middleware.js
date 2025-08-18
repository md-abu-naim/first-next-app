
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const dummyData = {
        role: 'user',
        email: 'admin@gmail.com'
    }

    let isBlogsPage = request.nextUrl.pathname.startsWith('/blogs')
    let isAdmin = dummyData.role === 'admin'
    if(isBlogsPage && !isAdmin){
        // return NextResponse.redirect(new URL('/login', request.url))
        return NextResponse.rewrite(new URL('/login', request.url))
    }
//   return NextResponse.redirectnew URL('/home', request.url))
  return NextResponse.next()
}
 
// export const config = {
//   matcher: '/about/:path*',
// }