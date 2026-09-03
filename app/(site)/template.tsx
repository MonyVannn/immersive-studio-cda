import { PageTransition } from "@/components/ui/page-transition";

export default function SiteTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}
