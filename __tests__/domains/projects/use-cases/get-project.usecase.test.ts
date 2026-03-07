import { describe, it, expect } from "vitest"
import { GetProjectsUseCase } from "../../../../domains/projects/use-cases/get-project.usecase"
import { ProjectRepository } from "@/domains/projects/repositories/project.repository"

class FakeProjectRepository {
  async getAll() {
    return [
      { id: "1", name: "Test Project", ownerId: "1", createdAt: new Date(), updatedAt: new Date() }
    ]
  }
}

describe("GetProjectsUseCase", () => {

  it("should return projects", async () => {

    const repo = new FakeProjectRepository() as ProjectRepository
    const useCase = new GetProjectsUseCase(repo)

    const result = await useCase.execute()

    expect(result.length).toBe(1)
  })

})
