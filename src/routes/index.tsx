import { createFileRoute } from "@tanstack/react-router";

const posts = [
  {
    title: "Sé el primero en ver la peli: Paw Patrol, The Dino Movie",
    date: "07/27/2026",
    category: "Cine",
    image: "https://www.marilumeza.com/wp-content/uploads/2026/07/0-266x400.png",
    url: "https://www.marilumeza.com/2026/07/se-el-primero-en-ver-la-peli-paw-patrol-the-dino-movie/",
  },
  {
    title: "Avistamiento de Ballenas en LB",
    date: "07/26/2026",
    category: "Familia",
    image:
      "https://www.marilumeza.com/wp-content/uploads/2026/07/RissosDolphin_4704-credit_CherylDeMattis-300x282.jpg",
    url: "https://www.marilumeza.com/2026/07/avistamiento-de-ballenas-en-lb/",
  },
  {
    title: "Nave Espacial Endeavour estrena casa",
    date: "06/29/2026",
    category: "Eventos",
    image: "https://www.marilumeza.com/wp-content/uploads/2026/06/IMG_4450-300x169.jpeg",
    url: "https://www.marilumeza.com/2026/06/nave-espacial-endeavour-estrena-casa/",
  },
  {
    title: "Gloria Trevi lista para concierto en el BMO Stadium",
    date: "02/03/2026",
    category: "Música",
    image:
      "https://www.marilumeza.com/wp-content/uploads/2026/02/1e344457-873a-393c-de9e-82fef2473e1c-300x375.jpg",
    url: "https://www.marilumeza.com/2026/02/gloria-trevi-lista-para-concierto-en-el-bmo-stadium/",
  },
  {
    title: "Abren exhibición de tortugas rescatadas",
    date: "02/03/2026",
    category: "Comunidad",
    image:
      "https://www.marilumeza.com/wp-content/uploads/2026/02/vcsPRAsset_2431968_106568_1469958e-6303-461b-9fef-4ac6b3d4054b_0-300x200.jpg",
    url: "https://www.marilumeza.com/2026/02/abren-exhibicion-de-tortugas-rescatadas/",
  },
  {
    title: "THE LITTLE MERMAID On Demand y Digital el 17 de diciembre de 2024",
    date: "11/13/2024",
    category: "Streaming",
    image: "https://www.marilumeza.com/wp-content/uploads/2024/11/The-Little-Mermaid-300x206.png",
    url: "https://www.marilumeza.com/2024/11/the-little-mermaid-on-demand-y-digital-el-17-de-diciembre-de-2024/",
  },
] as const;

const highlights = ["Cine", "Familia", "Eventos", "Comunidad"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cuéntamelo Todo — Marilú Meza" },
      {
        name: "description",
        content: "Historias, eventos, entretenimiento y comunidad con Marilú Meza.",
      },
      { property: "og:title", content: "Cuéntamelo Todo — Marilú Meza" },
      {
        property: "og:description",
        content: "Últimas notas de cine, música, familia y eventos en Los Angeles.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [featuredPost, ...latestPosts] = posts;

  return (
    <div className="overflow-hidden">
      <section className="relative isolate bg-md-surface-container-lowest">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,176,200,0.42),_transparent_32rem),linear-gradient(135deg,_rgba(255,217,226,0.5),_transparent_42%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-md-primary">
              Marilú Meza presenta
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-[0.95] text-md-on-background sm:text-6xl lg:text-7xl">
              Cuéntamelo Todo
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-md-on-surface-variant">
              Una guía cercana de entretenimiento, eventos familiares, cultura pop y noticias de
              comunidad para disfrutar dentro y fuera de Los Angeles.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-md-outline-variant bg-md-surface-container px-4 py-2 text-sm font-semibold text-md-on-surface"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <article className="group overflow-hidden rounded-[2rem] border border-md-outline-variant bg-md-surface shadow-2xl shadow-md-primary/10">
            <a href={featuredPost.url} target="_blank" rel="noreferrer" className="block">
              <div className="grid sm:grid-cols-[0.8fr_1fr]">
                <img
                  src={featuredPost.image}
                  alt=""
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
                />
                <div className="flex min-h-80 flex-col justify-end p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-md-primary">
                    Nota destacada
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-md-on-surface">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-5 text-sm font-semibold text-md-on-surface-variant">
                    Por Marilú Meza · {featuredPost.date}
                  </p>
                  <span className="mt-7 inline-flex w-fit items-center rounded-full bg-md-primary px-5 py-3 text-sm font-bold text-md-on-primary transition-colors group-hover:bg-md-secondary">
                    Leer historia
                  </span>
                </div>
              </div>
            </a>
          </article>
        </div>
      </section>

      <section id="ultimas" className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-md-primary">
              Publicaciones recientes
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-md-on-background">
              Últimas historias
            </h2>
          </div>
          <a
            href="https://www.marilumeza.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold text-md-primary underline-offset-4 hover:underline"
          >
            Ver sitio original
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.url}
              className="group overflow-hidden rounded-3xl border border-md-outline-variant bg-md-surface-container-lowest shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-md-primary/10"
            >
              <a href={post.url} target="_blank" rel="noreferrer" className="flex h-full flex-col">
                <img
                  src={post.image}
                  alt=""
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-md-primary">
                    {post.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-md-on-surface">
                    {post.title}
                  </h3>
                  <p className="mt-auto pt-6 text-sm font-semibold text-md-on-surface-variant">
                    Por Marilú Meza · {post.date}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        id="categorias"
        className="mx-auto mb-10 max-w-6xl rounded-[2rem] bg-md-primary-container px-6 py-12 text-md-on-primary-container sm:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em]">Qué encontrarás</p>
            <h2 className="mt-3 font-display text-4xl font-bold">
              Planes, estrenos y cultura para compartir.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Invitaciones a premieres y screenings",
              "Eventos familiares en el sur de California",
              "Noticias de entretenimiento latino",
              "Historias de comunidad y servicios",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white/45 p-5 font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
