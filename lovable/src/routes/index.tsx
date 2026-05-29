import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Disciplines } from "@/components/Disciplines";
import { Community } from "@/components/Community";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HENKO FITNESS — Centro Deportivo en Paine | CrossFit, GAP, Halterofilia" },
      {
        name: "description",
        content:
          "HENKO FITNESS, centro deportivo en Paine, Chile. CrossFit, GAP, Gimnasia y Halterofilia. Formamos comunidad y potenciamos tu crecimiento personal.",
      },
      { property: "og:title", content: "HENKO FITNESS — Centro Deportivo en Paine" },
      {
        property: "og:description",
        content: "CrossFit, GAP, Gimnasia y Halterofilia. Forja tu cambio en Paine, Chile.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          name: "HENKO FITNESS",
          description:
            "Centro deportivo en Paine. CrossFit, GAP, Gimnasia y Halterofilia.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gilda Díaz Girón 821",
            addressLocality: "Paine",
            addressRegion: "Región Metropolitana",
            addressCountry: "CL",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Disciplines />
      <Community />
      <Location />
      <Footer />
    </main>
  );
}
