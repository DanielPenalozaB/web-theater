"use client";

import { useSession, getSession } from "next-auth/react";

export default function Page() {
	const { data: session, status } = useSession();

	if (!session) return <p>Access Denied</p>;

	return (
		<>
			<h1>Protected Page</h1>
			<p>You can view this page because you are signed in.</p>
		</>
	);
}
