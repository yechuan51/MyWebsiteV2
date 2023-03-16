import path from "path";
import fsPromise from "fs/promises";
import MarkdownContentComp from "@/components/markdown/markdownContent";

const ABOUT_PAGE_PATH = ["public", "content", "about", "about.md"];

async function getAboutPageMarkdown(
  filePath: string[]
): Promise<{ error: any } | { content: string }> {
  try {
    const targetPath = path.join(process.cwd(), ...filePath);
    console.log(targetPath);
    const data = await fsPromise.readFile(targetPath, "utf-8");
    return { content: data };
  } catch (error) {
    console.error(error);
    return { error: error };
  }
}

export default async function AboutPage() {
  const data = await getAboutPageMarkdown(ABOUT_PAGE_PATH);
  if ("error" in data) {
    throw Error(data.error);
  }
  const content = data.content;
  return (
    <div>
      <MarkdownContentComp content={content} />
    </div>
  );
}
