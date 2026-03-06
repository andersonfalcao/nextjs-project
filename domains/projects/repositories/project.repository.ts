import { Project } from "../entities/project.entity";

export interface ProjectRepository {
  create(project: Project): Promise<Project>;
  getById(id: string): Promise<Project | null>;
  getAll(): Promise<Project[]>;
  update(project: Project): Promise<Project>;
  delete(id: string): Promise<Project>;
}
