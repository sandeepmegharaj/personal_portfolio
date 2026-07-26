/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import FooterClock from "@/components/footer-clock";
import { Icons } from "@/components/icons";
import { getAssetPath } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.01;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-28 md:size-36 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={getAssetPath(DATA.avatarUrl)} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about" className="-mt-8">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-lg font-normal text-muted-foreground"># About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-lg font-normal text-muted-foreground"># Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-lg font-normal text-muted-foreground"># Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={getAssetPath(education.logoUrl)}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-lg font-normal text-muted-foreground"># Stack</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-3">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div
                  className="border bg-background border-border ring-2 ring-border/5 rounded-xl h-11 w-11 flex items-center justify-center hover:scale-105 hover:bg-muted/40 transition-all duration-200"
                  title={skill.name}
                >
                  {skill.icon && <skill.icon className="size-6 text-foreground fill-current" />}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>
      <section id="ask-ai">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border/40 pt-6">
            <h2 className="text-sm sm:text-base font-normal text-muted-foreground">
              # ask why Sandeep might matter? on any platform
            </h2>
            <div className="flex items-center gap-2">
              <Link
                href="https://chatgpt.com/s/t_6a6608d6dea08191a57693015bf149a3"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-background border-border ring-2 ring-border/5 rounded-xl h-10 w-10 flex items-center justify-center hover:scale-105 hover:bg-muted/40 transition-all duration-200"
                title="Ask ChatGPT"
              >
                <Icons.openai className="size-5 text-foreground fill-current" />
              </Link>
              <Link
                href="https://claude.ai/share/847edd00-5338-4140-b4f2-e16230e348d7"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-background border-border ring-2 ring-border/5 rounded-xl h-10 w-10 flex items-center justify-center hover:scale-105 hover:bg-muted/40 transition-all duration-200"
                title="Ask Claude"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-foreground">
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <path d="M12 2v20M17 5L7 19M19 12H5M17 19L7 5" />
                </svg>
              </Link>
              <Link
                href="https://gemini.google.com/app/0500dd762cc0c538?hl=en-IN"
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-background border-border ring-2 ring-border/5 rounded-xl h-10 w-10 flex items-center justify-center hover:scale-105 hover:bg-muted/40 transition-all duration-200"
                title="Ask Gemini"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 text-foreground">
                  <path d="M12 2a1 1 0 0 1 .928.629l1.92 4.479 4.479 1.92a1 1 0 0 1 0 1.856l-4.479 1.92-1.92 4.479a1 1 0 0 1-1.856 0l-1.92-4.479-4.479-1.92a1 1 0 0 1 0-1.856l4.479-1.92 1.92-4.479A1 1 0 0 1 12 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>

      <footer className="mt-20 border-t border-border/40 pt-8 pb-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-1 text-left text-sm text-muted-foreground font-sans">
          <p>
            Designed &amp; Developed by{" "}
            <span className="font-semibold text-foreground">Sandeep</span>
          </p>
          <p>© 2026 All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-1 text-left sm:text-right text-sm text-muted-foreground font-sans">
          <p className="whitespace-nowrap">
            Visitors{" "}
            <span className="font-semibold text-foreground">#86</span>
          </p>
          <p className="whitespace-nowrap">
            Hyderabad, India{" "}
            <span className="font-semibold text-foreground">
              <FooterClock />
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}
