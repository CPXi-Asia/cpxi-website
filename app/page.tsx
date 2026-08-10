import { Hero } from "./_components/hero";
import { ClientLogos } from "./_components/client-logos";
import { Partners } from "./_components/partners";
import { Services } from "./_components/services";
import { Contact } from "./_components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <Services />
      <Partners />
      <Contact />
    </main>
  );
}
