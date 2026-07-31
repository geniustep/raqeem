import { buildTrustMetadata, TrustPolicyPage, type TrustPolicyPageProps } from "@/components/trust/TrustPolicyPage";
const slug = "incident-response" as const;
export const generateMetadata = (props: TrustPolicyPageProps) => buildTrustMetadata(slug, props);
export default function Page(props: TrustPolicyPageProps) { return <TrustPolicyPage slug={slug} {...props} />; }
