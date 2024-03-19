import type { Request, Response } from 'express';
import Project from '../models/Project';

export class ProjectController {

    static createProject = async (req: Request, res: Response) => {

        const project = new Project(req.body)

        try {
            await project.save()
            res.send('Proyecto Creado Correctamente')
        } catch (error) {
            console.log('Error en createProject', (error as Error).message);
            res.status(500).json({ error: 'Error Interno del Servidor' })
        }
    }

    static getAllProjects = async (req: Request, res: Response) => {
        res.send('Todos los Proyectos')
    }
}