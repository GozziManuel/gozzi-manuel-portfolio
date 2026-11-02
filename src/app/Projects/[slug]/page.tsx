import Link from "next/link";
import { ProjectList } from "../../utils/project";
import "../Projectpage.css";
import { anton } from "@/app/utils/font";
//

export async function generateStaticParams() {
  return ProjectList.map((project) => ({
    slug: project.slug,
  }));
}

//
export default async function ProjectsDetailed({
  params,
}: {
  params: { slug: string };
}) {
  //
  const { slug } = await params;
  const project = ProjectList.find((el) => el.slug === slug);

  //
  if (!project) {
    <h1>Project Not Found</h1>;
  }

  return (
    <div className="ContainerBody">
      <h1>{project?.slug}</h1>
    </div>
  );
}
