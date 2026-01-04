import { Details } from "@/app/projects/[project]/_components/details";
import { LinkButton } from "@/components/ui/buttons";
import { H1, H2 } from "@/components/ui/typography/headers";
import { Carousel } from "@/features/carousel/components/carousel";
import { getProject } from "@/features/projects/utils/project-reader";
import { notFound } from "next/dist/client/components/not-found";

export default async function Project({
                                        params,
                                      }: {
  params: Promise<{ project: string }>;
}) {
  const projectId = await params.then((params) => params.project);
  const project = await getProject([ projectId ]).then(projects => projects[0]);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 w-full max-w-7xl mx-auto px-4 mb-16">

        <div className="flex flex-col gap-4 w-full">
          <H1 className="text-5xl font-black text-center my-4 mt-8">
            {metadata.title}
          </H1>

          <Carousel slides={metadata.slides} />

          {/* Mobile Details */}
          <div className="block lg:hidden">
            <Details metadata={metadata} />
          </div>

          <div className="prose lg:prose-xl dark:prose-invert max-w-none mt-4">
            {content}
            {
              metadata.collaborators && <>
                    <H2>Collaborators</H2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {metadata.collaborators.map((collaborator) => (
                        <LinkButton key={collaborator.name} variant="highlight" href={collaborator.url} className="flex gap-4 p-2 h-20">
                          <img src={collaborator.img} alt={collaborator.name} className="w-16 h-16 mr-2 rounded-full"/>
                          <div className="flex flex-col grow">
                            <span className="font-bold text-lg">{collaborator.name}</span>
                            {collaborator.role && <span className="font-italic text-foreground/75">{collaborator.role}</span>}
                          </div>


                        </LinkButton>
                      ))
                      }
                    </div>
                </>
            }
          </div>
        </div>

        {/* Desktop Details */}
        <aside className="hidden lg:block relative">
          <div className="sticky top-32">
            <Details metadata={metadata} />
          </div>
        </aside>
      </div>
    </>
  )
}