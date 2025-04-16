import fs from "fs";
import { join } from "path";

export default function handler(req, res) {
	const portfolioData = join(process.cwd(), "/data/portfolio.json");
	if (process.env.NODE_ENV === "development") {
		if (req.method === "POST") {
			fs.writeFileSync(
				portfolioData,
				JSON.stringify(req.body, undefined, '\t'),
				"utf-8",
				(err) => console.log(err)
			);
		} else {
			res
				.status(401)
				.json({ name: "Error: Unauthorized access, this route is only accessible in development mode." });
		}
	}
}
