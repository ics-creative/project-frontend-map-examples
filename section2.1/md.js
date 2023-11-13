import fs from "fs";
import { marked } from "marked";

marked.use({
  mangle: false,
  headerIds: false
});

const markdownString = fs.readFileSync("sample.md", "utf8");

const htmlString = marked.parse(
  markdownString
);

fs.writeFileSync("sample.html", htmlString, "utf8");