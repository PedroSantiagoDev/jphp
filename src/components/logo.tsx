import { Link } from "react-router-dom";

interface LogoProps {
  name: string;
}

export function Logo({ name }: LogoProps) {
  const letters = name.split("");

  return (
    <Link 
      to="/#home"
      onClick={() => {
        const el = document.getElementById("home");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }} 
      className="flex items-center gap-1 cursor-pointer">
      <img alt="JPHP logo" className="w-12 h-12" src="/logo.png" />
      <div className="overflow-hidden flex cursor-default">
        {letters.map((letter, index) => (
          <h1
            key={index}
            className="font-mono text-4xl font-bold cursor-pointer bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {letter}
          </h1>
        ))}
      </div>
    </Link>
  );
}
