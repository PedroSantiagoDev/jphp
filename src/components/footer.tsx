import { Logo } from "./logo";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t mt-auto px-4 py-3">
      <div className="m-auto max-w-5xl flex justify-between items-center sm:flex-row flex-col gap-2">
        <Logo name="JPHP" />
        <p className="text-sm text-muted-foreground">
          Copyright © {new Date().getFullYear()} JPHP
        </p>
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
    </footer>
  );
}
