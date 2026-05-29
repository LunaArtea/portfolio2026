import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luna Galilea — Product Designer Portfolio" },
      {
        name: "description",
        content:
          "Featured work by Luna Galilea: enterprise products, UX research and design systems for B2B platforms.",
      },
      { property: "og:title", content: "Luna Galilea — Product Designer Portfolio" },
      {
        property: "og:description",
        content: "Featured product design work for B2B platforms.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedWork />
    </>
  );
}
