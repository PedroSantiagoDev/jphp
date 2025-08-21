import { Logo } from "./logo";
import { Github, Linkedin, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function Footer() {
  return (
    <footer className="border-t mt-auto px-4 py-3">
      <div className="m-auto max-w-5xl flex justify-between items-center sm:flex-row flex-col gap-2">
        <Logo name="JPHP" />
        <p className="text-sm text-muted-foreground">
          Copyright © {new Date().getFullYear()} JPHP
        </p>
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
                href="mailto:joaopedrosantiago1103@gmail.com?subject=Contato pelo Portfólio"
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
    </footer>
  );
}
