import { Router } from 'express';
import { getProjects, createProject, updateProject, deleteProject, getProject, getProjectTask} from '../controllers/projects.controller.js';

const router = Router();

router.get('/projects', getProjects);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.get('/projects/:id', getProject);

router.get('/projects/:id/tasks', getProjectTask)

export default router;
