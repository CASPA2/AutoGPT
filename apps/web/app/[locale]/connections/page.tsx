import { OAuthCard } from "../../../components/OAuthCard";

export default function ConnectionsPage() {
  return (
    <div className="p-6 flex gap-4">
      <OAuthCard provider="youtube" connected={false} />
      <OAuthCard provider="tiktok" connected={false} />
      <OAuthCard provider="instagram" connected={false} />
    </div>
  );
}
