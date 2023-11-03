"use client";

import React from "react";
import { InputInterface } from "./InputInterface";

export default function Input({
	id,
	label,
	placeholder,
	autoComplete = "off",
	value,
	onChange,
	type = "text",
}: InputInterface) {
	return (
		<div className="flex flex-col gap-2">
			<label
				htmlFor={id}
				className="block text-sm text-white font-medium leading-6"
			>
				{label}
			</label>
			<div>
				<input
					type={type}
					name={id}
					id={id}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					autoComplete={autoComplete}
					className="block w-full px-2 py-1.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-lg border-0 shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-600 placeholder:text-slate-400 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
				/>
			</div>
		</div>
	);
}
