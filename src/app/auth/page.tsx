"use client";

import { GoogleIcon, MicrosoftIcon } from "@/assets/svg";
import { Input } from "@/components";
import React, { useCallback, useState } from "react";

export default function Auth() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [variant, setVariant] = useState<"signin" | "signup">("signin");

	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) =>
			currentVariant === "signin" ? "signup" : "signin"
		);
	}, []);

	return (
		<div className="relative h-full w-full bg-indigo-500 bg-[url('/images/hero.jpg')] bg-blend-multiply bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="w-full h-full bg-black bg-opacity-50">
				<div className="flex justify-center items-center h-full w-full">
					<div className="flex flex-col self-center p-16 h-full lg:h-auto w-full lg:max-w-md bg-white dark:bg-slate-800 lg:rounded-3xl">
						<h2 className="self-center mb-8 w-full max-w-xs text-3xl sm:text-4xl text-indigo-500 font-semibold selection:bg-slate-200">
							{variant === "signin" ? "Welcome back" : "Hi there"}
						</h2>
						<div className="self-center flex flex-col sm:flex-row gap-4 w-full max-w-xs">
							<button
								type="button"
								title="Google"
								className="flex justify-center items-center gap-2 px-4 py-2 w-full bg-white dark:bg-slate-800 hover:bg-gray-200 hover:dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-sm text-gray-500 dark:text-slate-400 rounded-lg"
							>
								<GoogleIcon className="h-5 w-5" />
								Google
							</button>
							<button
								type="button"
								title="Microsoft"
								className="flex justify-center items-center gap-2 px-4 py-2 w-full bg-white dark:bg-slate-800 hover:bg-gray-200 hover:dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-sm text-gray-500 dark:text-slate-400 rounded-lg"
							>
								<MicrosoftIcon className="h-5 w-5" />
								Microsoft
							</button>
						</div>
						<div className="self-center flex items-center gap-2 py-2 w-full max-w-xs">
							<hr className="w-full border-slate-600" />
							<span className="text-sm text-slate-600 dark:text-slate-400">
								or
							</span>
							<hr className="w-full border-slate-600" />
						</div>
						<div className="flex justify-center items-center flex-col gap-4">
							<form
								action=""
								className="flex items flex-col gap-4 w-full max-w-xs"
							>
								{variant == "signin" ? (
									<>
										<Input
											id="email"
											label="Email"
											placeholder="Enter your email"
											type="email"
											autoComplete="email"
											value={email}
											onChange={(
												e: React.ChangeEvent<HTMLInputElement>
											) => setEmail(e.target.value)}
										/>
										<Input
											id="pass"
											label="Password"
											placeholder="Enter your password"
											type="password"
											autoComplete="current-password"
											value={password}
											onChange={(
												e: React.ChangeEvent<HTMLInputElement>
											) => setPassword(e.target.value)}
										/>
									</>
								) : (
									<>
										<Input
											id="name"
											label="Name"
											placeholder="Enter your name"
											type="text"
											autoComplete="username"
											value={name}
											onChange={(
												e: React.ChangeEvent<HTMLInputElement>
											) => setName(e.target.value)}
										/>
										<Input
											id="email"
											label="Email"
											placeholder="Enter your email"
											type="email"
											autoComplete="email"
											value={email}
											onChange={(
												e: React.ChangeEvent<HTMLInputElement>
											) => setEmail(e.target.value)}
										/>
										<Input
											id="pass"
											label="Password"
											placeholder="Enter your password"
											type="password"
											autoComplete="new-password"
											value={password}
											onChange={(
												e: React.ChangeEvent<HTMLInputElement>
											) => setPassword(e.target.value)}
										/>
										<Input
											id="pass-confirm"
											label="Confirm password"
											placeholder="Enter your password"
											type="password"
											autoComplete="new-password"
											value={confirmPassword}
											onChange={(
												e: React.ChangeEvent<HTMLInputElement>
											) =>
												setConfirmPassword(
													e.target.value
												)
											}
										/>
									</>
								)}
							</form>
							<div className="flex flex-col gap-4 w-full max-w-xs">
								{variant === "signin" && (
									<button
										type="button"
										className="self-end text-sm text-indigo-500 hover:text-indigo-400 selection:bg-slate-200"
									>
										Forgot password?
									</button>
								)}
								<button className="inline-flex w-full justify-center rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 disabled:bg-gray-400 disabled:cursor-not-allowed">
									{variant === "signin"
										? "Sign in"
										: "Sign up"}
								</button>
								<span className="flex gap-1 text-sm text-slate-500 selection:bg-slate-200">
									{variant === "signin"
										? "Don't have and account?"
										: "Already have an account?"}
									<button
										className="text-sm text-indigo-500 hover:text-indigo-400"
										onClick={toggleVariant}
									>
										{variant === "signin"
											? "Sign in"
											: "Sign up"}
									</button>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
