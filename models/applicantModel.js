export default class ApplicantModel {
    static addApplicant(jobId, applicant) {
      const job = JobModel.getJobById(jobId);
      job.applicants.push(applicant);
    }
  }
  