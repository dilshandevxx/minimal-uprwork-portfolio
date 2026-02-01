import React from "react";
import ProjectDetailContent from "@/modules/ProjectDetailContent";

export function generateStaticParams() {
  return [
    { slug: "lumina" },
    { slug: "apex" },
    { slug: "vortex" },
    { slug: "novus" },
  ];
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  return <ProjectDetailContent slug={params.slug} />;
}
