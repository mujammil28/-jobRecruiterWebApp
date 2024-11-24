import JobModel from '../models/jobModel.js';

export const listApplicants = (req, res) => {
  const job = JobModel.getJobById(req.params.jobId);
  if (job) {
    res.render('applicantList', { applicants: job.applicants });
  } else {
    res.status(404).render('404');
  }
};

export const handleApply = (req, res) => {
  JobModel.addApplicant(req.params.jobId, req.body);
  res.redirect('/jobs');
};
