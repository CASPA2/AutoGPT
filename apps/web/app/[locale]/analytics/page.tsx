import { apiFetch } from "../../../lib/client";
import { AnalyticsPoint } from "../../../types";

export default async function AnalyticsPage() {
  const data = await apiFetch<AnalyticsPoint[]>("/v1/analytics/youtube/sample");
  return (
    <div className="p-6">
      <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
