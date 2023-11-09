import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
//@ts-ignore
import { Awaitable } from "bluebird";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";

interface User {
	id: number;
	createdAt: Date;
	modifiedAt: Date;
	username: string;
	image: string | null;
	email: string | null;
	password: string | null;
	isAdmin: boolean;
	emailConfirmed: boolean;
}

export const authOptions: AuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID || "",
			clientSecret: process.env.GITHUB_SECRET || "",
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
		Credentials({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req): Awaitable<User | null> {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Email and password required");
				}

				const user = await prismadb.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user || !user.password) {
					throw new Error("Email does not exist");
				}

				const isCorrectPassword = await compare(
					credentials.password,
					user.password
				);

				if (!isCorrectPassword) {
					throw new Error("Incorrect password");
				}

				return user;
			},
		}),
	],
	pages: {
		signIn: "/auth",
	},
	debug: process.env.NODE_ENV === "development",
	adapter: PrismaAdapter(prismadb),
	session: { strategy: "jwt" },
	jwt: {
		secret: process.env.NEXTAUTH_JWT_SECRET,
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
