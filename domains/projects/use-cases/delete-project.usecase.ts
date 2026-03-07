import { Project } from "../entities/project.entity"
import { ProjectRepository } from "../repositories/project.repository"

export class DeleteProjectUseCase {
  constructor(private projectRepository: ProjectRepository) {}

  async execute(id: string): Promise<void> {
    return this.projectRepository.delete(id)
  }
}
