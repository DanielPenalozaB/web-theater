"use client";

import { Input } from "@/components";
import React, { useState } from "react";

export default function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="w-full h-full bg-black bg-opacity-50">
				<div className="flex justify-center">
					<div className="self-center mt-2 p-16 w-full lg:w-2/5 lg:max-w-md bg-black bg-opacity-70 rounded-md">
						<h2 className="mb-8 text-4xl text-white font-semibold">
							Welcome back!
						</h2>
						<div className="flex flex-col gap-4">
							<Input
								id="email"
								label="Email"
								type="email"
								value={email}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setEmail(e.target.value)}
							/>
							<Input
								id="pass"
								label="Password"
								type="pass"
								value={email}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>
								) => setEmail(e.target.value)}
							/>
							<button className="inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 disabled:bg-gray-400 disabled:cursor-not-allowed">
								Sign in
							</button>
						</div>
						<span>
							Don&apos;t have and account
							<button>Sign up</button>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
