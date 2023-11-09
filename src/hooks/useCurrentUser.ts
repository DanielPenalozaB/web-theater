"use client";

import { fetcher } from "@/lib";
import useSWR from "swr";

const useCurrentUser = () => {
	const { data, error, isLoading, mutate } = useSWR(
		"/api/user/current",
		fetcher
	);

	return {
		data,
		error,
		isLoading,
		mutate,
	};
};

export default useCurrentUser;
