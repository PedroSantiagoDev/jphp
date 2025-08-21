import { Logo } from "./components/logo";
import { ThemeToggle } from "./components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { CarouselCard } from "./components/carousel-card";
import { ExperienceCard } from "./components/experience-card";
import { HtmlIcon } from "./components/icons/html-icon";
import { IconCard } from "./components/icon-card";
import { CssIcon } from "./components/icons/css-icon";
import { JsIcon } from "./components/icons/js-icon";
import { JavaIcon } from "./components/icons/java-icon";
import { SpringBootIcon } from "./components/icons/spring-boot-icon";
import { PhpIcon } from "./components/icons/php-icon";
import { LaravelIcon } from "./components/icons/laravel-icon";
import { DockerIcon } from "./components/icons/docker-icon";
import { MysqlIcon } from "./components/icons/mysql-icon";
import { GitIcon } from "./components/icons/git-icon";
import { FileUser, Github, Link2, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Layout } from "./components/layout";
import { PostgreSQLIcon } from "./components/icons/postgre-sql-icon";
import { ReactIcon } from "./components/icons/react-icon";
import { TailwindIcon } from "./components/icons/tailwind-icon";
import { PostManIcon } from "./components/icons/postman-icon";
import { NodejsIcon } from "./components/icons/nodejs-icon";
import { Link } from "react-router-dom";
import { LinuxIcon } from "./components/icons/linux-icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";

const navLinks = [
  { href: "#home", label: "/Home" },
  { href: "#experience", label: "/Experiência" },
  { href: "#project", label: "/Projetos" },
  { href: "#techs", label: "/Tecnologias" },
  { href: "#formation", label: "/Formação" },
  { href: "/blog", label: "/Blog" },
];

const currentExperience = [
  {
    title: "Bolsista - Jovem Tech",
    time: "2025 - Atual",
    pathLogo: "/logo/pulse.jpeg",
    enterprise: "Pulse",
    model: "Presencial",
    description:
      "Participação no programa Jovem Tech, com foco em desenvolvimento back-end. Atuação em projetos práticos envolvendo criação de APIs RESTful com Java e Spring Boot, além de construção de interfaces dinâmicas com HTML, CSS e JavaScript. Aprimoramento de habilidades em bancos de dados relacionais (SQL), metodologias ágeis e boas práticas de código. Também em constante desenvolvimento de soft skills, como comunicação, trabalho em equipe e resolução de problemas.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Java",
      "Spring Boot",
      "SQL",
      "Comunicação",
      "Trabalho Em Equipe",
    ],
  },
];

const projects = [
  {
    href: "https://homolog.aws.eti.br/",
    title: "Intranet CodeLink",
    description:
      "Plataforma intranet em Laravel para gestão de notícias, reservas, links e unidades organizacionais, otimizando comunicação interna. Utilizada por mais de 100 usuários",
    tags: ["PHP", "Laravel", "MySQL", "Livewire", "Tailwind CSS"],
  },
  {
    href: "https://github.com/PedroSantiagoDev/hey-professor",
    title: "Hey Professor Q&A",
    description:
      "Plataforma para professores e alunos gerenciarem perguntas e respostas, promovendo aprendizado interativo com Laravel e Livewire.",
    tags: ["PHP", "Laravel", "MySQL", "Livewire", "Tailwind CSS"],
  },
  {
    href: "https://github.com/PedroSantiagoDev/nodejs-api",
    title: "API de Cadastro Node.js",
    description:
      "API RESTful escalável para cadastro e gestão de usuários e check-in em academias, desenvolvida com TypeScript, Node.js, Prisma e testes (unitários) em Jest.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Prisma", "Jest"],
  },
  {
    href: "https://github.com/PedroSantiagoDev/dattebayo",
    title: "Sistema Cadastro Ninjas",
    description:
      "Aplicação em Java para gerenciar perfis de ninjas, usando Spring Boot, PostgreSQL e Hibernate para manipulação eficiente de dados.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Hibernate"],
  },
];

const techs = [
  {
    icon: PhpIcon,
    title: "PHP",
  },
  {
    icon: LaravelIcon,
    title: "Laravel",
  },
  {
    icon: JavaIcon,
    title: "Java",
  },
  {
    icon: SpringBootIcon,
    title: "Spring",
  },
  {
    icon: MysqlIcon,
    title: "MYSQL",
  },
  {
    icon: PostgreSQLIcon,
    title: "PostgreSQL",
  },
  {
    icon: DockerIcon,
    title: "Docker",
  },
  {
    icon: GitIcon,
    title: "Git",
  },
  {
    icon: PostManIcon,
    title: "Postman",
  },
  {
    icon: LinuxIcon,
    title: "Linux",
  },
  {
    icon: HtmlIcon,
    title: "HTML",
  },
  {
    icon: CssIcon,
    title: "CSS",
  },
  {
    icon: JsIcon,
    title: "JavaScript",
  },
  {
    icon: ReactIcon,
    title: "React",
  },
  {
    icon: NodejsIcon,
    title: "Node.Js",
  },
  {
    icon: TailwindIcon,
    title: "TailwindCSS",
  },
];

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Layout>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
      >
        <div className="m-auto max-w-5xl flex justify-between items-center p-2">
          <Logo name="JPHP" />
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300"
                >
                  <Button variant="link" className="cursor-pointer">
                    {link.label}
                  </Button>
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300"
                >
                  <Button variant="link" className="cursor-pointer">
                    {link.label}
                  </Button>
                </a>
              )
            )}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Button
                size="icon"
                variant="outline"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col items-start gap-4 p-4 border-t">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="link">{link.label}</Button>
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="link">{link.label}</Button>
                </a>
              )
            )}
          </nav>
        )}
      </header>
      <main className="pt-14">
        <div className="px-4 py-8 space-y-8">
          <section id="home" className="scroll-mt-20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex flex-col gap-2 items-center">
                <Avatar className="w-32 h-32 flex-shrink-0">
                  <AvatarImage
                    src="/avatar.png"
                    alt="Foto de perfil de João Pedro"
                  />
                  <AvatarFallback className="text-2xl">
                    João Pedro
                  </AvatarFallback>
                </Avatar>
                <a href="/curriculo.pdf" target="_blank">
                  <Button className="flex gap-1 items-center cursor-pointer">
                    <FileUser />
                    currículo
                  </Button>
                </a>
              </div>
              <div className="flex-1 space-y-2">
                <h1 className="text-lg md:text-3xl font-bold text-center sm:text-start">
                  Olá, eu sou João Pedro,
                </h1>
                <p className="text-sm md:text-base text-foreground">
                  Sou desenvolvedor desde 2023, focado em backend para
                  construção de APIs e sistemas escaláveis. Iniciei na
                  tecnologia como suporte N2, adquirindo habilidades em
                  resolução de problemas. Busco oportunidades para aplicar
                  competências e contribuir em projetos relevantes. Além de
                  programar, compartilho conhecimentos via blog, auxiliando a
                  comunidade de desenvolvedores.
                </p>
                <div className="flex gap-5 items-center">
                  <div className="flex gap-2 text-muted-foreground">
                    <Link2 className="w-5 h-5" />
                    <p className="text-sm md:text-sm">minhas redes:</p>
                  </div>
                  <div className="flex gap-3">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="https://github.com/PedroSantiagoDev"
                          target="_blank"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="https://www.linkedin.com/in/pedro-santiago-lima/"
                          target="_blank"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Linkedin</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a
                          href="mailto:joaopedrosantiago1103@gmail.com?subject=Oportunidade de Trabalho - Contato via Portfólio"
                          target="_blank"
                          aria-label="Enviar e-mail"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Mail</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className="scroll-mt-20">
            <div>
              <h2 className="text-xs mb-3 font-normal uppercase tracking-wider">
                Atualmente
              </h2>
              <article>
                {currentExperience.map((exp) => (
                  <ExperienceCard key={exp.title} experience={exp} />
                ))}
              </article>
            </div>
          </section>

          <section id="project" className="scroll-mt-20">
            <div>
              <h2 className="text-xs mb-3 font-normal uppercase tracking-wider">
                Projetos Recentes
              </h2>

              <CarouselCard projects={projects} />
            </div>
          </section>

          <section id="techs" className="scroll-mt-20">
            <div>
              <h2 className="text-xs mb-3 font-normal uppercase tracking-wider">
                Tecnologias
              </h2>
              <ul className="grid grid-cols-4 gap-2 sm:grid-cols-7 md:grid-cols-8">
                {techs.map((tech) => (
                  <IconCard
                    key={tech.title}
                    icon={tech.icon}
                    title={tech.title}
                  />
                ))}
              </ul>
            </div>
          </section>

          <section id="formation" className="scroll-mt-20">
            <div>
              <h2 className="text-xs mb-3 font-normal uppercase tracking-wider">
                Formação Acadêmica
              </h2>
              <article className="flex flex-col md:flex-row justify-between items-start mb-1">
                <div className="mb-2">
                  <h3 className="text-md md:text-2xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">
                    Analise e Desenvolvimento de Sistemas
                  </h3>
                  <p className="text-xs font-normal uppercase tracking-wider">
                    2022 - 2024
                  </p>
                </div>
                <div className="md:text-right">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-5 h-5 rounded"
                      alt="Logo da Faculdade ISL Wyden"
                      src="/logo/faculdade.jpeg"
                    />
                    <span className="text-sm font-normal text-black-400 dark:text-black-400">
                      Faculdade ISL Wyden
                    </span>
                  </div>
                  <p className="text-sm">Presencial</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
