import { Background } from "./components/background";
import { Github } from "lucide-react";
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

const experience = [
  {
    title: "Bolsista - Jovem Tech",
    time: "2025 - Atual",
    pathLogo: "/logo/pulse.jpeg",
    enterprise: "Pulse",
    model: "Presencia",
    description:
      "Aprendizado contínuo com cursos de hard e soft skills (comunicação, trabalho em equipe, resolução de problemas), com estudo e aplicação de Java, Spring Boot e desenvolvimento de APIs RESTful em projetos reais. Introdução ao desenvolvimento front-end com HTML, CSS e JavaScript, criando páginas dinâmicas, e contato direto com metodologias ágeis e boas práticas de codificação em um projeto realizado em parceria com o Governo do Maranhão, Fapema, Emap, Grupo Mateus, Suzano, Tegram, Copi e Secti.",
    stack: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "SQL"],
  },
];

const projects = [
  {
    href: "https://google.com.br",
    title: "RESTful API with Java and Spring Boot",
    description: "RESTful API for a hotel management system",
    img: "/placeholder.svg",
    tags: ["Java", "Spring Boot", "RESTful", "API"],
  },
  {
    href: "https://google.com.br",
    title: "CodeLink",
    description: "Authentication and authorization system",
    img: "/placeholder.svg",
    tags: ["Java", "Spring Security", "JWT"],
  },
  {
    href: "https://google.com.br",
    title: "Real-Time Chat with Spring WebSocket",
    description: "Real-time chat application",
    img: "/placeholder.svg",
    tags: ["Java", "Spring Boot", "WebSocket"],
  },
];

export function App() {
  return (
    <div className="min-h-screen overflow-hidden relative">
      <Background />
      <div className="m-auto max-w-5xl">
        <header className="p-2">
          <div className="flex justify-between items-center">
            <Logo name="JPHP" />
            <ThemeToggle />
          </div>
        </header>
        <main>
          <div className="px-4 py-8 space-y-8">
            <section>
              <div className="flex lg:flex-row items-center gap-6">
                <Avatar className="w-24 h-24 flex-shrink-0">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-2xl">
                    João Pedro
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <h1 className="text-md md:text-2xl font-bold">
                    Olá, eu sou João Pedro,
                  </h1>
                  <p className="text-sm md:text-sm text-muted-foreground">
                    Um desenvolvedor backend especialista em Java e PHP, focado
                    na construção de APIs robustas e na arquitetura de sistemas
                    escaláveis.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div>
                <h2 className="text-xs mb-3 font-normal uppercase tracking-wider">
                  Atualmente
                </h2>
                <article>
                  {experience.map((exp) => (
                    <ExperienceCard key={exp.title} experience={exp} />
                  ))}
                </article>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Cargos anteriores</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <div>
                        {experience.map((exp) => (
                          <ExperienceCard key={exp.title} experience={exp} />
                        ))}
                      </div>
                      <div>
                        {experience.map((exp) => (
                          <ExperienceCard key={exp.title} experience={exp} />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            <section>
              <div>
                <h2 className="text-xs mb-3 font-normal uppercase tracking-wider">
                  Projetos Recentes
                </h2>

                <CarouselCard projects={projects} />
              </div>
            </section>

            <section>
              <div>
                <h2 className="text-xs mb-3 font-normal uppercase tracking-wider">
                  Tecnologias
                </h2>
                <ul className="grid grid-cols-4 gap-1 sm:grid-cols-7 md:grid-cols-9">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <li
                      key={index}
                      className="border shadow overflow-hidden rounded-md border-zinc-200 bg-zinc-100/30 transition-colors backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30"
                    >
                      <div className="group flex aspect-square select-none flex-col items-center justify-center p-2">
                        <Github className="group-hover:-translate-y-1 size-8 transition-all duration-300" />
                        <span className="mt-3 text-xs">GitHub</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
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
      </div>
    </div>
  );
}
