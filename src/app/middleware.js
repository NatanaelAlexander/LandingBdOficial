import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export default function middleware(request) {
    const token = request.cookies.get('token');

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
        jwt.verify(token, process.env.SECRET_KEY)
        return NextResponse.next()
    } catch (err) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
export const config = {
    matcher: ['/adminPage/:path*','/api/tursoProtected/:path*' ], // Aplica el middleware a /adminPage y sus subrutas
};