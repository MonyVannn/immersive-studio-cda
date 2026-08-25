import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhoItsForCategory } from "@/components/sections/who-its-for-category";
import { audiences, getAudience, whoItsForPage } from "@/lib/content/site";

type AudiencePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return audiences.map((audience) => ({ slug: audience.slug }));
}

export async function generateMetadata({
  params,
}: AudiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudience(slug);

  if (!audience) {
    return { title: whoItsForPage.eyebrow };
  }

  return { title: audience.label };
}

export default async function AudiencePage({ params }: AudiencePageProps) {
  const { slug } = await params;
  const audience = getAudience(slug);

  if (!audience) {
    notFound();
  }

  return <WhoItsForCategory audience={audience} />;
}
