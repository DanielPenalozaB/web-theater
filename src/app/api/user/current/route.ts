import { serverAuth } from "@/lib";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
	try {
		const { currentUser } = await serverAuth(req);

		return Response.json(currentUser);
	} catch (error) {
		console.log(error);
		Response.json({ message: "Error" });
	}
}
