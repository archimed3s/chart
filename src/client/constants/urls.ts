const port = parseInt(process.env.PORT || '3000', 10),
	baseUrl = `http://localhost:${port}/api/`;

export const URLS = {
	WILD_PIG_DATA: `${baseUrl}wild-pig-data`
};
