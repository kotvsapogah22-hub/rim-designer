import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects, getProjectBySlug, imageDimensions } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center px-4 py-12">
      <div className="max-w-4xl w-full space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад на главную страницу
        </Link>

        <header className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          {/^https?:\/\//.test(project.short) ? (
            <a
              href={project.short}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-2xl items-center gap-2 text-lg text-primary underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Смотреть ролики
            </a>
          ) : project.short ? (
            <p className="max-w-2xl text-lg text-muted-foreground">
              {project.short}
            </p>
          ) : null}
        </header>

        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src={project.cover}
            alt={project.title}
            width={imageDimensions[project.cover]?.width}
            height={imageDimensions[project.cover]?.height}
            sizes="(max-width: 1024px) 100vw, 896px"
            className="h-auto w-full object-contain"
          />
        </div>

        {project.gallery
          .filter((image) => image !== project.cover)
          .map((image) => (
            <div
              key={image}
              className="w-full overflow-hidden rounded-xl border bg-muted"
            >
              <Image
                src={image}
                alt={`${project.title} — ${image}`}
                width={imageDimensions[image]?.width}
                height={imageDimensions[image]?.height}
                sizes="(max-width: 1024px) 100vw, 896px"
                className="h-auto w-full object-contain"
              />
            </div>
          ))}

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад на главную страницу
        </Link>
      </div>
    </div>
  );
}
