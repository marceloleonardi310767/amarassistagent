import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src', '_content');

export function getMarkdownContent(fileName: string) {
  const fullPath = path.join(contentDirectory, `${fileName}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      frontmatter: data,
      content,
    };
  } catch (error) {
    console.error(`Error reading markdown file ${fileName}.md:`, error);
    return null;
  }
}

export function getAllMarkdownSlugs() {
  try {
    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames.map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
  } catch (error) {
    console.error('Error reading markdown slugs:', error);
    return [];
  }
}

