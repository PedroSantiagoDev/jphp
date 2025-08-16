import { Background } from "./components/background";
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
import { Github, Link2, Linkedin, Mail } from "lucide-react";

const currentExperience = [
  {
    title: "Bolsista - Jovem Tech",
    time: "2025 - Atual",
    pathLogo: "/logo/pulse.jpeg",
    enterprise: "Pulse",
    model: "Presencial",
    description:
      "Aprendizado contínuo com cursos de hard e soft skills (comunicação, trabalho em equipe, resolução de problemas), com estudo e aplicação de Java, Spring Boot e desenvolvimento de APIs RESTful em projetos reais. Introdução ao desenvolvimento front-end com HTML, CSS e JavaScript, criando páginas dinâmicas, e contato direto com metodologias ágeis e boas práticas de codificação em um projeto realizado em parceria com o Governo do Maranhão, Fapema, Emap, Grupo Mateus, Suzano, Tegram, Copi e Secti.",
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
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="w-32 h-32 flex-shrink-0">
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback className="text-2xl">
                    João Pedro
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <h1 className="text-md md:text-2xl font-bold">
                    Olá, eu sou João Pedro,
                  </h1>
                  <p className="text-sm md:text-sm text-foreground">
                    Desenvolvedor com experiência full-stack e paixão por
                    backend, onde me especializo em Java (Spring Boot) e PHP
                    (Laravel). Desde 2023, venho atuando em projetos
                    desafiadores para construir APIs robustas e arquitetar
                    sistemas escaláveis com uma visão abrangente.
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

            <section>
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
