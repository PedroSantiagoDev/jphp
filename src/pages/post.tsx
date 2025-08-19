import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import grayMatter from "gray-matter";
import { Layout } from "@/components/layout";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<{ content: string; data: any } | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const modules = import.meta.glob("/src/posts/*.md", { as: "raw" });
        const postPath = `/src/posts/${slug}.md`;
        const resolver = modules[postPath];
        if (resolver) {
          const content = await resolver();
          const { content: postContent, data } = grayMatter(content);
          setPost({ content: postContent, data });
        } else {
          console.error("Post not found");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <header className="m-auto max-w-5xl py-8 flex justify-between">
        <Button
          variant="link"
          className="hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300"
        >
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Link>
        </Button>
        <ThemeToggle />
      </header>
      <main className="px-4 prose dark:prose-invert max-w-none mb-10">
        <h1 className="text-4xl text-center">{post.data.title}</h1>
        <p className="text-center text-muted-foreground">
          {post.data.description}
        </p>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </main>
    </Layout>
  );
}
