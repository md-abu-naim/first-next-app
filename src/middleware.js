
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     const dummyData = {
//         role: 'admin',
//         email: 'admin@gmail.com'
//     }

//     let isBlogsPage = request.nextUrl.pathname.startsWith('/blogs')
//     let isAdmin = dummyData.role === 'admin'
//     if(isBlogsPage && !isAdmin){
//         // return NextResponse.redirect(new URL('/login', request.url))
//         return NextResponse.rewrite(new URL('/login', request.url))
//     }
// //   return NextResponse.redirectnew URL('/home', request.url))
//   return NextResponse.next()
// }

// export const config = {
//   matcher: '/about/:path*',
// }

export const middleware = async (req) => {
    const token = await getToken({ req })
    const isTokenOk = Boolean(token)
    const isAdminUser = token?.role === 'admin'
    const isAdminSpecific = req.nextUrl.pathname.startsWith('/products')

    if (isAdminSpecific) {
        const callbackUrl = encodeURIComponent(req.nextUrl.pathname)
        return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url))
    }

    return NextResponse.next()
}