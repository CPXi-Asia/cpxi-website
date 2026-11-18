import { Hero } from "./_components/hero";
import { ClientLogos } from "./_components/client-logos";
import { Partners } from "./_components/partners";
import { Services } from "./_components/services";
import { FeaturedCaseStudies } from "./_components/featured-case-studies";
import { Facts } from "./_components/facts";
import { Contact } from "./_components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <Services />
      <FeaturedCaseStudies />
      <Facts />
      <Partners />
      <Contact />
    </main>
  );
}
