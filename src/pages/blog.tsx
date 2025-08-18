import { BlogCard } from "@/components/blog-card";
import { Layout } from "@/components/layout";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import grayMatter from "gray-matter";

interface Post {
  slug: string;
  data: any;
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const modules = import.meta.glob("/src/posts/*.md", { as: "raw" });
      const postsData = await Promise.all(
        Object.entries(modules).map(async ([path, resolver]) => {
          const content = await resolver();
          const { data } = grayMatter(content);
          const slug = path.split("/").pop()?.replace(".md", "");
          return { slug, data };
        })
      );
      setPosts(
        postsData.filter((post): post is Post => post.slug !== undefined)
      );
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <header className="m-auto max-w-5xl py-8 flex justify-between">
        <Button
          variant="link"
          className="hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300"
        >
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
        </Button>
        <ThemeToggle />
      </header>
      <main className="px-4 space-y-10">
        <section>
          <h1 className="text-7xl font-bold mb-5">Blog.</h1>
          <p className="max-w-2xl font-light text-accent-foreground">
            Bem-vindo ao meu blog! Um espaço para compartilhar minha jornada de
            aprendizado contínuo em tecnologia. Aqui você encontrará insights e
            tutoriais sobre meus estudos em desenvolvimento back-end, engenharia
            de software e as tecnologias que estou explorando.
          </p>
        </section>

        <section className="space-y-4">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug!}
              tags={post.data.tags || []}
              title={post.data.title}
              description={post.data.description}
              date={post.data.date}
            />
          ))}
        </section>
      </main>
    </Layout>
  );
}
