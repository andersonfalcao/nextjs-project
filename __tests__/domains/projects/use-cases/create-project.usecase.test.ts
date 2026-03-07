import { describe, it, expect } from "vitest"

import { ProjectRepositoryMock } from "../../../mocks/product-repository-mock"
import { CreateProjectUseCase } from "../../../../domains/projects/use-cases/create-project.usecase"


describe("CreateProductUseCase", () => {

  it("should create a product", async () => {

    const repository = new ProjectRepositoryMock()
    const useCase = new CreateProjectUseCase(repository)

    const project = await useCase.execute({
      id: '1',
      name: 'Project Name',
      ownerId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    })

    expect(project.id).toBeDefined()
    expect(repository.projects.length).toBe(1)
  })

})
