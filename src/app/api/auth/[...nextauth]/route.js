
import dbConnect, { collectionName } from "@/lib/dbConnect"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "example" },
                // email: { label: "email", type: "email", placeholder: 'example@gail.com' },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                // const res = await fetch("/your/endpoint", {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" }
                // })
                // const user = await res.json()

                const { username, password } = credentials
                const user = await dbConnect(collectionName.TEST_USER).findOne({ username })
                const isPasswordOk = password == user.password

                // const user = {id: '1', name: 'J Smith', email: "jsmith@example.com"}

                // If no error and we have user data, return it
                if (isPasswordOk && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account) {
                // console.log('from call', user, account, profile, email, credentials);
                const { providerAccountId, provider } = account
                const { email: user_email, image, name } = user
                const userData = { providerAccountId, provider, user_email, image, name }
                console.log(userData);
            }

            return true
        },
        async session({ session, token, user }) {
            if (token) {
                session.user.username = token.username;
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.username = user.username
                token.role = user.role
            }
            return token
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }