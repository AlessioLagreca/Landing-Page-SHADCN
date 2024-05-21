import { useQuery } from "@tanstack/react-query";

async function fetchTemplate() {
	try {
		const response = await fetch("/api/template");
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}

export const useTemplate = () => {
	return useQuery({
		queryKey: ["get-template"],
		queryFn: () => fetchTemplate(),
	});
};
