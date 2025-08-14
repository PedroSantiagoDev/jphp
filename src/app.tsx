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
import { Badge } from "./components/ui/badge";
import { CarouselCard } from "./components/carousel-card";

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
    title: "Authentication with Spring Security and JWT",
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
      <div className="m-auto max-w-4xl">
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
                  atualmente
                </h2>
                <div className="flex justify-between items-start mb-1">
                  <div className="mb-2">
                    <h3 className="text-md md:text-2xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">
                      Bolsista - Jovem Tech
                    </h3>
                    <p className="text-xs font-normal uppercase tracking-wider">
                      2025 - Atual
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-5 h-5 rounded"
                        alt="logo da empresa"
                        src="/logo/pulse.jpeg"
                      />
                      <span className="text-sm font-normal text-black-400 dark:text-black-400">
                        Pulse
                      </span>
                    </div>
                    <p className="text-sm">Presencial</p>
                  </div>
                </div>
                <p className="text-xs font-semibold mb-2">
                  Aprendizado contínuo com cursos de hard skills e soft skills
                  (comunicação, trabalho em equipe, resolução de problemas).
                  <br />
                  - Estudo e aplicação de Java, Spring Boot e desenvolvimento de
                  APIs RESTful em projetos reais.
                  <br />
                  - Introdução ao desenvolvimento front-end com HTML, CSS e
                  JavaScript, criando páginas dinâmicas.
                  <br />
                  - Contato direto com metodologias ágeis e boas práticas de
                  codificação.
                  <br /> - Projeto realizado em parceria com o Governo do
                  Maranhão, Fapema, Emap, Grupo Mateus, Suzano, Tegram, Copi e
                  Secti.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">Spring Boot</Badge>
                  <Badge variant="secondary">SQL</Badge>
                </div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Cargos anteriores</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex justify-between items-start mb-1">
                        <div className="mb-2">
                          <h3 className="text-md md:text-2xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">
                            Bolsista - Jovem Tech
                          </h3>
                          <p className="text-xs font-normal uppercase tracking-wider">
                            2025 - Atual
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <img
                              className="w-5 h-5 rounded"
                              alt="logo da empresa"
                              src="/logo/pulse.jpeg"
                            />
                            <span className="text-sm font-normal text-black-400 dark:text-black-400">
                              Pulse
                            </span>
                          </div>
                          <p className="text-sm">Presencial</p>
                        </div>
                      </div>
                      <p className="text-xs font-semibold mb-2">
                        Aprendizado contínuo com cursos de hard skills e soft
                        skills (comunicação, trabalho em equipe, resolução de
                        problemas).
                        <br />
                        - Estudo e aplicação de Java, Spring Boot e
                        desenvolvimento de APIs RESTful em projetos reais.
                        <br />
                        - Introdução ao desenvolvimento front-end com HTML, CSS
                        e JavaScript, criando páginas dinâmicas.
                        <br />
                        - Contato direto com metodologias ágeis e boas práticas
                        de codificação.
                        <br /> - Projeto realizado em parceria com o Governo do
                        Maranhão, Fapema, Emap, Grupo Mateus, Suzano, Tegram,
                        Copi e Secti.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">HTML</Badge>
                        <Badge variant="secondary">CSS</Badge>
                        <Badge variant="secondary">JavaScript</Badge>
                        <Badge variant="secondary">Java</Badge>
                        <Badge variant="secondary">Spring Boot</Badge>
                        <Badge variant="secondary">SQL</Badge>
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
                <div className="grid grid-cols-4 gap-1 sm:grid-cols-6 md:grid-cols-7">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div
                      key={index}
                      className="border shadow overflow-hidden rounded-md border-zinc-200 bg-zinc-100/30 transition-colors backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30"
                    >
                      <div className="group flex aspect-square select-none flex-col items-center justify-center p-2">
                        <Github className="group-hover:-translate-y-1 size-8 transition-all duration-300" />
                        <span className="mt-3 text-xs">GitHub</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div>
                <h2 className="text-xs mb-3 font-normal uppercase tracking-wider">
                  Formação Acadêmica
                </h2>
                <div className="flex justify-between items-start mb-1">
                  <div className="mb-2">
                    <h3 className="text-md md:text-2xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">
                      Tecnólogo - Analise e Desenvolvimento de Sistemas
                    </h3>
                    <p className="text-xs font-normal uppercase tracking-wider">
                      2022 - 2024
                    </p>
                  </div>
                  <div className="text-right">
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
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
