import { apiFetch } from "../../../../lib/client";

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = await apiFetch<any>(`/v1/renders/${params.id}`);
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl">Post {params.id}</h1>
      <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
        {JSON.stringify(post, null, 2)}
      </pre>
    </div>
  );
}
