"use client";

import React from "react";
import { InputInterface } from "./InputInterface";

export default function Input({
	id,
	label,
	value,
	onChange,
	type = "text",
}: InputInterface) {
	return (
		<div>
			<label
				htmlFor={id}
				className="block text-sm text-white font-medium leading-6"
			>
				{label}
			</label>
			<div className="mt-2">
				<input
					type={type}
					name={id}
					id={id}
					value={value}
					onChange={onChange}
					placeholder="Enter your email"
					autoComplete="given-name"
					className="block w-full px-2 py-1.5 bg-white dark:bg-slate-800 text-gray-900 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
				/>
			</div>
		</div>
	);
}
