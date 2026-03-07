import { Project } from "../entities/project.entity"
import { ProjectRepository } from "../repositories/project.repository"

export class UpdateProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(project: Project): Promise<Project> {
    return this.projectRepository.update(project)
  }
}
