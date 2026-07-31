import { buildTrustMetadata, TrustPolicyPage, type TrustPolicyPageProps } from "@/components/trust/TrustPolicyPage";
const slug = "responsible-ai" as const;
export const generateMetadata = (props: TrustPolicyPageProps) => buildTrustMetadata(slug, props);
export default function Page(props: TrustPolicyPageProps) { return <TrustPolicyPage slug={slug} {...props} />; }
