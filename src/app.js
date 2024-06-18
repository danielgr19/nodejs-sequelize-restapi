import express from 'express';
import projectsRoutes from './routes/project.routes.js';
import tasksRoutes from './routes/task.routes.js';

const app = express();

//middlewares: software con el que las diferentes aplicaciones se comunican entre si.
app.use(express.json()); //Cada que envien un dato .json el server lo interpreta y lo almancena en un request body



app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;