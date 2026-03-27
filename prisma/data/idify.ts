import { search } from "@inquirer/prompts";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const processFile = (fileContents: string) => {
    return fileContents.replace(/type: /g, () => {
        const id = crypto
            .createHash("md5")
            .update(crypto.randomBytes(20))
            .digest("hex");
        return `id: "${id}",\n        type: `;
    });
};

const files = fs
    .readdirSync(__dirname, {
        recursive: true,
        withFileTypes: true,
    })
    .filter((file) => file.isFile() && file.name !== "idify.ts")
    .map((file) => ({
        name: file.name,
        value: path.join(file.parentPath, file.name),
    }));

const filePath = await search({
    message: "Select a file:",
    source: (input) => {
        return files.filter((file) =>
            file.name.toLowerCase().includes((input ?? "").toLowerCase()),
        );
    },
});

const contents = fs.readFileSync(filePath, { encoding: "utf-8" });
fs.writeFileSync(filePath, processFile(contents));
console.log("Done.");
