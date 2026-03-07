import { Project } from "../../domains/projects/entities/project.entity"
import { ProjectRepository } from "../../domains/projects/repositories/project.repository"

export class ProjectRepositoryMock implements ProjectRepository {

  projects: Project[] = []

  async getAll(): Promise<Project[]> {
    return this.projects
  }

  async getById(id: string): Promise<Project | null> {
    return this.projects.find(p => p.id === id) ?? null
  }

  async create(project: Project): Promise<Project> {
    this.projects.push(project);
    return Promise.resolve(project);
  }

  async update(project: Project): Promise<Project> {
    const index = this.projects.findIndex(p => p.id === project.id)
    this.projects[index] = project;
    return Promise.resolve(project);
  }

  async delete(id: string): Promise<void> {
    const project = this.projects.find(p => p.id === id);

    if (!project) return Promise.reject('Project not found');

    this.projects = this.projects.filter(p => p.id !== id);
    
    return Promise.resolve();
  }
}