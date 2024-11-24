import express from 'express';
import {
  getApplicants,
  addApplicant,
  getApplicantById,
  updateApplicantById,
  deleteApplicantById,
  renderUpdateJobForm,
  updateJobById,
  deleteJobById,
  applyToJob
} from './controllers/jobController.js';
import { uploadResume } from './middlewares/fileUploadMiddleware.js';

const app=express();
// Get all applicants for a job
app.get('/:id/applicants', getApplicants);

// Add a new applicant to a job
app.post('/:id/applicants', uploadResume.single('resume'), addApplicant);

// Retrieve a specific applicant by ID for a job listing
app.get('/applicant/:applicantId', getApplicantById);

// Update a specific applicant by ID for a job listing
app.put('/applicant/:applicantId', updateApplicantById);

// Delete a specific applicant by ID for a job listing
app.delete('/applicant/:applicantId', deleteApplicantById);

// Render update form for a job
app.get('/:id/update', renderUpdateJobForm);

// Update a specific job listing by ID
app.post('/:id/update', updateJobById);

// Delete a specific job listing by ID
app.get('/:id/delete', deleteJobById);

// Apply to a job listing by ID
app.post('/:id/apply', uploadResume.single('resume'), applyToJob);

app.listen(3400, () => {
    console.log(`server is listening at port 3400`);
  });
  