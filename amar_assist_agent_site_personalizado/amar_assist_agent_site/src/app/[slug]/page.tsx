import { getMarkdownContent, getAllMarkdownSlugs } from "../../lib/markdown";
import ReactMarkdown from "react-markdown";
import Navbar from "../../components/Navbar";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const paths = getAllMarkdownSlugs();
  return paths;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getMarkdownContent(params.slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="container mx-auto p-4 prose lg:prose-xl">
          <h1>Documento não encontrado</h1>
          <p>O documento que você está procurando não foi encontrado.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 prose lg:prose-xl max-w-none">
        {/* <h1 className="text-3xl font-bold mb-4">{post.frontmatter.title || params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1> */}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </main>
    </>
  );
}

