import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "./mdx-components";

export async function parseMdx(source: string) {
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
    },
    components: mdxComponents,
  });

  return content;
}
