import express from 'express';
import { listApplicants, handleApply } from '../controllers/applicantController.js';

const router = express.Router();

router.get('/:jobId', listApplicants);
router.post('/:jobId/apply', handleApply);

export default router;
