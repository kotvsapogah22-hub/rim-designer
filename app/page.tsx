import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { contact, projects } from "@/lib/data";

const aboutItems = [
  {
    title: "Четкие сроки",
    text: "Гарантирую рациональное управление временем и сдаю проекты в срок",
  },
  {
    title: "Опыт работы",
    text: "12-летний опыт позволяет мне сочетать проверенные практики с актуальными трендами",
  },
  {
    title: "Образование",
    text: "Уральская Государственная Архитектурная Академия, художественное училище им И. Д. Шадра",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative aspect-[3/2] w-full overflow-hidden animate-in fade-in duration-700">
        <Image
          src="/assets/hero-header.jpg"
          alt="Шапка — Рима Саттарова"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </section>

      <section
        id="about"
        className="mt-2 w-full bg-white py-10 animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <ul className="mx-auto grid w-full max-w-5xl gap-4 sm:grid-cols-3">
          {aboutItems.map((item, index) => (
            <li
              key={item.title}
              className="card-hover rounded-xl border-t-4 border-primary bg-background p-5 text-center shadow-sm"
            >
              <span className="text-xs font-black uppercase tracking-wider text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="portfolio"
        className="mx-auto mt-20 max-w-6xl w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <div className="space-y-3 text-center">
          <h2 className="flex items-center justify-center gap-3 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            <span className="inline-block h-8 w-2 bg-primary" />
            Портфолио
            <span className="inline-block h-8 w-2 bg-primary" />
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group card-hover block rounded-xl border bg-background p-4"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="px-1 pt-4 text-lg font-semibold tracking-tight">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="contacts"
        className="mx-auto mt-20 max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <div className="space-y-3 text-center">
          <h2 className="flex items-center justify-center gap-3 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            <span className="inline-block h-8 w-2 bg-primary" />
            Контакты
            <span className="inline-block h-8 w-2 bg-primary" />
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Обсудим ваш проект — напишите мне письмо или позвоните.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center gap-3 rounded-xl border bg-background px-5 py-4 text-lg font-medium tracking-tight transition-colors hover:bg-muted"
          >
            <Mail className="size-5 shrink-0 text-primary group-hover:text-foreground" />
            {contact.email}
          </a>

          <a
            href={`tel:${contact.phoneHref}`}
            className="group flex items-center gap-3 rounded-xl border bg-background px-5 py-4 text-lg font-medium tracking-tight transition-colors hover:bg-muted"
          >
            <Phone className="size-5 shrink-0 text-primary group-hover:text-foreground" />
            {contact.phone}
          </a>
        </div>
      </section>
    </>
  );
}
