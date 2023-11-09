import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from "../../../../lib/prismadb";
//@ts-ignore
import { Awaitable } from "bluebird";

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
		Credentials({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req): Awaitable<User | null> {
				if (!credentials?.email || !credentials?.password) {
					throw new Error(
						"Invalid credentials. Email and password are required."
					);
				}

				const USER = await prismadb.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				return USER;
			},
		}),
	],
	session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
