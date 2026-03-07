import { Project } from "../entities/project.entity"
import { ProjectRepository } from "../repositories/project.repository"

export class GetProjectsUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(): Promise<Project[]> {
    return this.projectRepository.getAll()
  }
}
