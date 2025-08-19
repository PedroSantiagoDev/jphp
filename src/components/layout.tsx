import { Background } from "./background";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden relative flex flex-col">
      <Background />
      <div className="w-full max-w-5xl mx-auto flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
