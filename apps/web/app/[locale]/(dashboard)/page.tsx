import { useTranslations } from "next-intl";
import { Checklist } from "../../../components/Checklist";
import { OAuthCard } from "../../../components/OAuthCard";
import { RateLimitBanner } from "../../../components/RateLimitBanner";
import { HealthBar } from "../../../components/HealthBar";

export default function DashboardPage() {
  const t = useTranslations();
  const checklist = [
    { label: t("connectAccounts"), done: false, href: "/connections" },
    { label: t("setDefaults"), done: false, href: "/settings" },
    { label: t("runFirstRender"), done: false, href: "/create" },
  ];
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">{t("welcome")}</h1>
      <RateLimitBanner />
      <HealthBar />
      <div>
        <h2 className="text-xl mb-2">{t("gettingStarted")}</h2>
        <Checklist items={checklist} />
      </div>
      <div className="flex gap-4">
        <OAuthCard provider="youtube" connected={false} />
        <OAuthCard provider="tiktok" connected={false} />
        <OAuthCard provider="instagram" connected={false} />
      </div>
    </div>
  );
}
