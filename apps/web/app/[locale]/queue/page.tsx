import { JobStatusRow, JobStatus } from "../../../components/JobStatusRow";
import { apiFetch } from "../../../lib/client";

export default async function QueuePage() {
  const jobs = await apiFetch<JobStatus[]>("/v1/renders");
  return (
    <div className="p-6 space-y-2">
      {jobs.map((job) => (
        <JobStatusRow key={job.id} job={job} />
      ))}
    </div>
  );
}
