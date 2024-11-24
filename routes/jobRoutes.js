import express from 'express';
import { listJobs, jobDetails, createJob, handleCreateJob, updateJob, handleUpdateJob, deleteJob } from '../controllers/jobController.js';

const router = express.Router();

router.get('/', listJobs);
router.get('/:id', jobDetails);
router.get('/create', createJob);
router.post('/create', handleCreateJob);
router.get('/:id/update', updateJob);
router.post('/:id/update', handleUpdateJob);
router.post('/:id/delete', deleteJob);

export default router;
