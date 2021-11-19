import fs from "fs";
import path from "path";

const nomsDir = path.join(process.cwd(), "public", "noms");

export const getSortedNoms = () => {
	const nomFiles = fs.readdirSync(nomsDir);

	const allNoms = nomFiles.map(fname => {
		return { id: fname.split(".")[0], name: fname };
	});

	// Sort posts by date
	return allNoms.sort(({ id: a }, { id: b }) => {
		a = a.split("_")[1] || 0;
		b = b.split("_")[1] || 0;
		if (a < b) {
			return 1;
		} else if (a > b) {
			return -1;
		} else {
			return 0;
		}
	});
};
