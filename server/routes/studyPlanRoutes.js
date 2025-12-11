import express from 'express';
import { createStudyPlan,getStudyPlans,editStudyPlan,deleteStudyPlan } from '../controllers/studyPlanController.js'


const router = express.Router();


router.post('/studyplan', createStudyPlan);
router.get('/studyplan', getStudyPlans);
router.put('/studyplan/:id', editStudyPlan);
router.delete('/studyplan/:id', deleteStudyPlan);



export default router;
