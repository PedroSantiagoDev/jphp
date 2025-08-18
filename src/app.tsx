import { Logo } from "./components/logo";
import { ThemeToggle } from "./components/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
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
import { MysqlIcon } from "./components/icons/mysql-icon";
import { FileUser, Github, Link2, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Layout } from "./components/layout";

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
      "Desenvolvimento de APIs RESTful com Java e Spring Boot e criação de front-ends dinâmicos com HTML, CSS e JavaScript, aplicando metodologias ágeis e boas práticas de código em projetos reais.",
    stack: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "SQL"],
  },
];

const previousPositions = [
  {
    title: "Desenvolvedor full stack - Freelance",
    time: "2024 - Atual",
    pathLogo: "/logo/lamps.jpeg",
    enterprise: "Lamparinas",
    model: "Home Office",
    description:
      "Atuação no desenvolvimento full-stack com PHP, JavaScript e SQL, com foco na otimização da performance e no fortalecimento da segurança do sistema (prevenção de SQL Injection e CSRF), resultando em melhorias diretas no fluxo de trabalho da equipe e na experiência do usuário",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "SQL Server",
      "SQL",
      "Jquery",
      "BootStrap",
    ],
  },
  {
    title: "Técnico de suporte",
    time: "2023 - 2025",
    pathLogo: "/logo/ctc.jpeg",
    enterprise: "CTC",
    model: "Presencial",
    description:
      "Atuação em suporte nível 2 (N2), com diagnóstico e solução de problemas de hardware e software, desenvolvimento de scripts para automação e implementação de políticas de segurança (backups, permissões), aliando a competência técnica a uma comunicação eficaz com usuários e à habilidade de priorizar demandas em ambientes dinâmicos.",
    stack: [
      "Sistemas Operacionais",
      "Redes de Computadores",
      "Scripting e Automação",
      "Diagnóstico de Hardware",
      "Comunicação Clara e Didática",
      "Trabalho em Equipe",
    ],
  },
];

const projects = [
  {
    href: "https://google.com.br",
    title: "CodeLink",
    description:
      "CODELINK: Intranet em Laravel para gestão de notícias, reservas, links e unidades organizacionais.",
    img: "/project/codelink.png",
    tags: ["PHP", "Laravel", "MySQL", "LiveWire", "Tailwind"],
  },
  {
    href: "https://google.com.br",
    title: "CodeLink",
    description:
      "CODELINK: Intranet em Laravel para gestão de notícias, reservas, links e unidades organizacionais.",
    img: "/project/codelink.png",
    tags: ["PHP", "Laravel", "MySQL", "LiveWire", "Tailwind"],
  },
  {
    href: "https://google.com.br",
    title: "CodeLink",
    description:
      "CODELINK: Intranet em Laravel para gestão de notícias, reservas, links e unidades organizacionais.",
    img: "/project/codelink.png",
    tags: ["PHP", "Laravel", "MySQL", "LiveWire", "Tailwind"],
  },
];

const techs = [
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300"
              >
                <Button variant="link">{link.label}</Button>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Button
                size="icon"
                variant="outline"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-muted-foreground hover:-translate-y-1 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="link">{link.label}</Button>
              </a>
            ))}
          </nav>
        )}
      </header>
      <main className="pt-14">
        <div className="px-4 py-8 space-y-8">
          <section id="home" className="scroll-mt-20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex flex-col gap-2 items-center">
                <Avatar className="w-32 h-32 flex-shrink-0">
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback className="text-2xl">
                    João Pedro
                  </AvatarFallback>
                </Avatar>
                <a href="/curriculo.pdf" target="_blank">
                  <Button className="flex gap-1 items-center">
                    <FileUser />
                    currículo
                  </Button>
                </a>
              </div>
              <div className="flex-1 space-y-2">
                <h1 className="text-md md:text-2xl font-bold text-center sm:text-start">
                  Olá, eu sou João Pedro,
                </h1>
                <p className="text-sm md:text-sm text-foreground">
                  Desenvolvedor com experiência full-stack e paixão por backend,
                  onde me especializo em Java (Spring Boot) e PHP (Laravel).
                  Desde 2023, venho atuando em projetos desafiadores para
                  construir APIs robustas e arquitetar sistemas escaláveis com
                  uma visão abrangente.
                </p>
                <div className="flex gap-5 items-center">
                  <div className="flex gap-2 text-muted-foreground">
                    <Link2 className="w-5 h-5" />
                    <p className="text-sm md:text-sm">minhas redes:</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/PedroSantiagoDev"
                      target="_blank"
                      className="hover:-translate-y-1 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/pedro-santiago-lima/"
                      target="_blank"
                      className="hover:-translate-y-1 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:joaopedrosantiago1103@gmail.com?subject=Contato pelo Portfóli"
                      target="_blank"
                      className="hover:-translate-y-1 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
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
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Cargos anteriores</AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    <div>
                      {previousPositions.map((exp) => (
                        <ExperienceCard key={exp.title} experience={exp} />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
              <ul className="grid grid-cols-4 gap-1 sm:grid-cols-7 md:grid-cols-8">
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
                      alt="logo da empresa"
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
