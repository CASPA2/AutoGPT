export type JobStatus = {
  id: string;
  status: "QUEUED" | "RENDERING" | "UPLOADING" | "PUBLISHED" | "FAILED";
};

export function JobStatusRow({ job }: { job: JobStatus }) {
  return (
    <div className="flex justify-between border-b py-2">
      <span>{job.id}</span>
      <span>{job.status}</span>
    </div>
  );
}
