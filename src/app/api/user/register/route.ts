import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";

export async function POST(request: Request) {
	try {
		const { email, name, password } = await request.json();

		const EXISTING_USER = await prismadb.user.findUnique({
			where: {
				email,
			},
		});

		console.log(EXISTING_USER);

		if (EXISTING_USER) {
			return Response.json({ message: "User already exists" });
		}

		const HASHED_PASSWORD = await bcrypt.hash(password, 12);

		const USER = await prismadb.user.create({
			data: {
				username: name,
				email,
				password: HASHED_PASSWORD,
				createdAt: new Date(),
				modifiedAt: new Date(),
				image: "",
				emailConfirmed: false,
				isAdmin: false,
			},
		});

		return Response.json(USER);
	} catch (error) {
		console.log(error);
	}
}
