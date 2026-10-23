import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Capabilities } from "@/components/site/capabilities";
import { Hse } from "@/components/site/hse";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Capabilities />
        <Hse />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
