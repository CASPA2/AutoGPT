import { Wizard } from "../../../components/Wizard";
import { OAuthCard } from "../../../components/OAuthCard";

export default function OnboardingPage() {
  const steps = [
    <div key="accounts" className="space-y-4">
      <p>Connect your accounts</p>
      <div className="flex gap-4">
        <OAuthCard provider="youtube" connected={false} />
        <OAuthCard provider="tiktok" connected={false} />
        <OAuthCard provider="instagram" connected={false} />
      </div>
    </div>,
    <div key="defaults">Set your defaults</div>,
    <div key="media">Upload media</div>,
    <div key="test">Render test</div>,
    <div key="publish">First publish</div>,
  ];
  return (
    <div className="p-6">
      <Wizard steps={steps} />
    </div>
  );
}
