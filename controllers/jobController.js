import JobModel from '../models/jobModel.js';

// Get all applicants for a specific job
export const getApplicants = (req, res) => {
  const { id } = req.params;
  const job = JobModel.findById(id);
  if (job) {
    res.render('applicants', { applicants: job.applicants });
  } else {
    res.status(404).render('404');
  }
};

// Add a new applicant to a specific job
export const addApplicant = (req, res) => {
  const { id } = req.params;
  const { name, email, contact } = req.body;
  const resumePath = req.file ? `/resumes/${req.file.filename}` : null;
  
  const job = JobModel.findById(id);
  if (job) {
    job.addApplicant({ name, email, contact, resumePath });
    res.redirect(`/jobs/${id}/applicants`);
  } else {
    res.status(404).render('404');
  }
};

// Retrieve a specific applicant by ID
export const getApplicantById = (req, res) => {
  const { applicantId } = req.params;
  const applicant = JobModel.findApplicantById(applicantId);
  if (applicant) {
    res.render('applicantDetails', { applicant });
  } else {
    res.status(404).render('404');
  }
};

// Update a specific applicant by ID
export const updateApplicantById = (req, res) => {
  const { applicantId } = req.params;
  const updatedData = req.body;

  const updatedApplicant = JobModel.updateApplicantById(applicantId, updatedData);
  if (updatedApplicant) {
    res.json({ success: true, applicant: updatedApplicant });
  } else {
    res.status(404).render('404');
  }
};

// Delete a specific applicant by ID
export const deleteApplicantById = (req, res) => {
  const { applicantId } = req.params;

  const isDeleted = JobModel.deleteApplicantById(applicantId);
  if (isDeleted) {
    res.json({ success: true });
  } else {
    res.status(404).render('404');
  }
};

// Render the update form for a job
export const renderUpdateJobForm = (req, res) => {
  const { id } = req.params;
  const job = JobModel.findById(id);
  if (job) {
    res.render('updateJob', { job });
  } else {
    res.status(404).render('404');
  }
};

// Update a job by ID
export const updateJobById = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const updatedJob = JobModel.updateById(id, updatedData);
  if (updatedJob) {
    res.redirect(`/jobs/${id}`);
  } else {
    res.status(404).render('404');
  }
};

// Delete a job by ID
export const deleteJobById = (req, res) => {
  const { id } = req.params;

  const isDeleted = JobModel.deleteById(id);
  if (isDeleted) {
    res.redirect('/jobs');
  } else {
    res.status(404).render('404');
  }
};

// Apply to a job
export const applyToJob = (req, res) => {
  const { id } = req.params;
  const { name, email, contact } = req.body;
  const resumePath = req.file ? `/resumes/${req.file.filename}` : null;

  const job = JobModel.findById(id);
  if (job) {
    job.addApplicant({ name, email, contact, resumePath });
    res.render('confirmation', { message: 'Application submitted successfully!' });
  } else {
    res.status(404).render('404');
  }
};
