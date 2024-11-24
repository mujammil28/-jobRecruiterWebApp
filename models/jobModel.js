const jobs = [];

export default class JobModel {
  static getAllJobs() {
    return jobs;
  }

  static getJobById(id) {
    return jobs.find((job) => job.id === parseInt(id));
  }

  static createJob(jobDetails) {
    jobs.push({ id: jobs.length + 1, ...jobDetails, applicants: [] });
  }

  static updateJob(id, jobDetails) {
    const index = jobs.findIndex((job) => job.id === parseInt(id));
    if (index !== -1) jobs[index] = { ...jobs[index], ...jobDetails };
  }

  static deleteJob(id) {
    const index = jobs.findIndex((job) => job.id === parseInt(id));
    if (index !== -1) jobs.splice(index, 1);
  }

  static addApplicant(jobId, applicantDetails) {
    const job = this.getJobById(jobId);
    if (job) job.applicants.push({ id: job.applicants.length + 1, ...applicantDetails });
  }
}
