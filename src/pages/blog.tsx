import { BlogCard } from "@/components/blog-card";
import { Layout } from "@/components/layout";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function Blog() {
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
      <main className="px-4 py-8 space-y-10">
        <section>
          <h1 className="text-7xl font-bold mb-5">Blog.</h1>
          <p className="max-w-2xl font-light text-accent-foreground">
            Bem-vindo ao meu blog! Aqui, compartilho insights, tutoriais e
            reflexões sobre desenvolvimento web, design e tecnologia. Mergulhe
            para explorar os artigos e tendências mais recentes no mundo
            digital.
          </p>
        </section>

        <section>
          <BlogCard
            tags={["nextjs", "reagir", "desenvolvimento web"]}
            title="Esta postagem é usada para testar o tema e a sintaxe do blog :3"
            description="Esta é uma breve descrição da postagem do blog"
            date="4 de julho de 2024"
          />
        </section>
      </main>
    </Layout>
  );
}
