import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password", placeholder: "password" }
            },
            async authorize(credentials: any) {
                console.log(credentials)

                return {
                    id: "1",
                    name: "Raj Thombare",
                    email: "rajthombare.dev@gmail.com"
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            token.userId = token.sub;
            return token;
        },
        async signIn({ user, account, profile }) {
            if (user.email && user.email.endsWith('@gmail.com')) {
                return true;
            }
            return false;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith(baseUrl)) return url;
            return baseUrl;
        },
        async session({ session, user, token }: any) {
            if (session && session.user) {
                session.user.id = token.userId;
            }
            console.log(session)
            return session
        }
    },
    pages: {
        signIn: "/signin"
    },
    secret: process.env.NEXTAUTH_SECRET
}